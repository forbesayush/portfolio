import './style.css';
import { trackVisitor, sendContactInquiry } from './utils/telegramTracker.js';

(() => {
  'use strict';

  // ---------- DOM Selectors ----------
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];

  // ---------- 1. Mobile Navigation Drawer ----------
  const menuBtn = $('#menuToggle');
  const mobileDrawer = $('#mobileDrawer');

  if (menuBtn && mobileDrawer) {
    const toggleMenu = open => {
      const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains('open');
      mobileDrawer.classList.toggle('open', isOpen);
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
    };

    menuBtn.addEventListener('click', () => toggleMenu());

    $$('.drawer-link').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        toggleMenu(false);
      }
    });

    window.addEventListener('click', e => {
      if (
        mobileDrawer.classList.contains('open') &&
        !mobileDrawer.contains(e.target) &&
        !menuBtn.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });
  }

  // ---------- 2. STAR Project Breakdown Toggles ----------
  $$('.project-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const drawer = $(`#${targetId}`);
      if (!drawer) return;

      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isExpanded));
      drawer.hidden = isExpanded;

      const icon = btn.querySelector('.toggle-icon');
      const textSpan = btn.querySelector('span');

      if (icon) {
        icon.textContent = isExpanded ? '+' : '−';
      }
      if (textSpan) {
        textSpan.textContent = isExpanded ? 'View STAR Breakdown' : 'Close STAR Breakdown';
      }
    });
  });

  // ---------- 3. Toast Notifications ----------
  const toastShelf = $('#toastShelf');
  function toast(message, duration = 3800) {
    if (!toastShelf) return;
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<span>✳</span> <span>${message}</span>`;
    toastShelf.appendChild(t);
    setTimeout(() => {
      t.style.opacity = '0';
      t.style.transform = 'translateY(10px)';
      setTimeout(() => t.remove(), 250);
    }, duration);
  }

  // ---------- 4. Recruiter Ingestion Form & Telegram Dispatch ----------
  const leadForm = $('#leadForm');
  const formDone = $('#formDone');
  const doneMsg = $('#doneMsg');

  function clearErr(groupId, errId) {
    const group = $(`#${groupId}`);
    const err = $(`#${errId}`);
    if (group) group.classList.remove('has-err');
    if (err) err.textContent = '';
  }

  function setErr(groupId, errId, msg) {
    const group = $(`#${groupId}`);
    const err = $(`#${errId}`);
    if (group) group.classList.add('has-err');
    if (err) err.textContent = msg;
  }

  if (leadForm) {
    const fName = $('#fName');
    const fEmail = $('#fEmail');
    const fMsg = $('#fMsg');

    fName?.addEventListener('input', () => clearErr('group-name', 'err-name'));
    fEmail?.addEventListener('input', () => clearErr('group-email', 'err-email'));
    fMsg?.addEventListener('input', () => clearErr('group-msg', 'err-msg'));

    leadForm.addEventListener('submit', async e => {
      e.preventDefault();

      const nameVal = fName?.value.trim() || '';
      const emailVal = fEmail?.value.trim() || '';
      const msgVal = fMsg?.value.trim() || '';
      const topicChecked = $('input[name="topic"]:checked');
      const topicVal = topicChecked ? topicChecked.value : 'APM Role';

      let ok = true;

      // Name validation
      if (nameVal.length < 2) {
        setErr('group-name', 'err-name', 'Please provide a name or organization (min 2 chars).');
        if (ok) fName?.focus();
        ok = false;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailVal)) {
        setErr('group-email', 'err-email', 'Please provide a valid email address.');
        if (ok) fEmail?.focus();
        ok = false;
      }

      // Message validation
      if (msgVal.length < 10) {
        setErr('group-msg', 'err-msg', 'Please provide brief details (min 10 characters).');
        if (ok) fMsg?.focus();
        ok = false;
      }

      if (!ok) return;

      const submitBtn = $('#btnSubmit');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending Message... ↗</span>`;
      }

      try {
        await sendContactInquiry({
          name: nameVal,
          email: emailVal,
          topic: topicVal,
          message: msgVal
        });

        leadForm.hidden = true;
        if (formDone) {
          formDone.hidden = false;
          if (doneMsg) {
            const firstName = nameVal.split(' ')[0] || 'there';
            doneMsg.textContent = `Thank you, ${firstName}. Your note has been delivered directly to my private channel. I will review and reply within 24 hours.`;
          }
        }
        toast('Inquiry delivered successfully.');
      } catch (err) {
        console.warn('Dispatch notification error:', err);
        leadForm.hidden = true;
        if (formDone) formDone.hidden = false;
      }
    });
  }

  // ---------- 5. Silent Background Visitor Telemetry ----------
  try {
    trackVisitor();
  } catch (err) {
    console.debug('Telemetry initialization notice:', err);
  }

})();
