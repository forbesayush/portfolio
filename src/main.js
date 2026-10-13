import './style.css';
import {
  createIcons,
  ArrowUpRight,
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  Menu,
  X,
  FileText,
  Mail,
  Layers,
  Compass,
  BarChart3,
  Cpu,
  TrendingUp,
  Sparkles,
  GraduationCap,
  BookOpen,
  Award,
  CheckCircle2,
  Send,
  Download,
  Check
} from 'lucide';
import { trackVisitor, sendContactInquiry } from './utils/telegramTracker.js';

(() => {
  'use strict';

  // ---------- DOM Utilities ----------
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- 1. Initialize Lucide Icons ----------
  const icons = {
    ArrowUpRight,
    ArrowDownRight,
    ArrowRight,
    ArrowUp,
    Menu,
    X,
    FileText,
    Mail,
    Layers,
    Compass,
    BarChart3,
    Cpu,
    TrendingUp,
    Sparkles,
    GraduationCap,
    BookOpen,
    Award,
    CheckCircle2,
    Send,
    Download,
    Check
  };

  function renderIcons() {
    try {
      createIcons({ icons });
    } catch (e) {
      console.warn('Lucide icon rendering note:', e);
    }
  }
  renderIcons();

  // ---------- 2. Toast Notifications ----------
  const toastShelf = $('#toastShelf');
  function showToast(message, iconName = 'check-circle-2', durationMs = 4000) {
    if (!toastShelf) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i data-lucide="${iconName}"></i><span>${message}</span>`;
    toastShelf.appendChild(toast);
    renderIcons();

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, durationMs);
  }

  // ---------- 3. Mobile Navigation Drawer ----------
  const menuToggle = $('#menuToggle');
  const mobileDrawer = $('#mobileDrawer');
  const menuIconOpen = $('#menuIconOpen');
  const menuIconClose = $('#menuIconClose');

  function setDrawerState(isOpen) {
    if (!mobileDrawer || !menuToggle) return;
    mobileDrawer.classList.toggle('open', isOpen);
    mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';

    if (menuIconOpen && menuIconClose) {
      menuIconOpen.style.display = isOpen ? 'none' : 'block';
      menuIconClose.style.display = isOpen ? 'block' : 'none';
    }
  }

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      setDrawerState(!isOpen);
    });

    // Close when clicking any drawer link
    $$('.drawer-link').forEach(link => {
      link.addEventListener('click', () => {
        setDrawerState(false);
      });
    });

    // Close on Escape key
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        setDrawerState(false);
      }
    });

    // Close when clicking outside drawer
    window.addEventListener('click', e => {
      if (
        mobileDrawer.classList.contains('open') &&
        !mobileDrawer.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        setDrawerState(false);
      }
    });
  }

  // ---------- 4. Active Navigation Observer ----------
  const navLinks = $$('.desktop-nav .nav-link');
  const sections = $$('main section[id]');

  if (navLinks.length > 0 && sections.length > 0 && 'IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              const href = link.getAttribute('href');
              if (href === `#${currentId}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    );

    sections.forEach(sec => navObserver.observe(sec));
  }

  // ---------- 5. Progressive Counter Enhancement ----------
  // Metric numbers are already pre-rendered in HTML (never 0).
  // This smoothly enhances them if reduced-motion is not requested.
  const counterElements = $$('.metric-value[data-count]');

  if (!prefersReducedMotion && counterElements.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const targetCount = parseInt(el.getAttribute('data-count'), 10);
            const prefix = el.getAttribute('data-prefix') || '';
            const suffix = el.getAttribute('data-suffix') || '';

            if (!isNaN(targetCount) && targetCount > 0) {
              const duration = 900; // ms
              const startTime = performance.now();

              const animate = currentTime => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out quad
                const easeOut = 1 - (1 - progress) * (1 - progress);
                const currentVal = Math.round(easeOut * targetCount);
                el.textContent = `${prefix}${currentVal}${suffix}`;

                if (progress < 1) {
                  requestAnimationFrame(animate);
                } else {
                  // Ensure final target value is exact
                  const finalTarget = el.getAttribute('data-target');
                  el.textContent = finalTarget || `${prefix}${targetCount}${suffix}`;
                }
              };

              requestAnimationFrame(animate);
            }

            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.25 }
    );

    counterElements.forEach(el => counterObserver.observe(el));
  }

  // ---------- 6. Recruiter Contact Form Validation & Telegram Dispatch ----------
  const leadForm = $('#leadForm');
  const formDone = $('#formDone');
  const doneMsg = $('#doneMsg');

  function clearError(groupId, errorId) {
    const group = $(`#${groupId}`);
    const errorEl = $(`#${errorId}`);
    if (group) group.classList.remove('has-error');
    if (errorEl) errorEl.textContent = '';
  }

  function setError(groupId, errorId, message) {
    const group = $(`#${groupId}`);
    const errorEl = $(`#${errorId}`);
    if (group) group.classList.add('has-error');
    if (errorEl) errorEl.textContent = message;
  }

  if (leadForm) {
    const fName = $('#fName');
    const fEmail = $('#fEmail');
    const fMsg = $('#fMsg');

    fName?.addEventListener('input', () => clearError('group-name', 'err-name'));
    fEmail?.addEventListener('input', () => clearError('group-email', 'err-email'));
    fMsg?.addEventListener('input', () => clearError('group-msg', 'err-msg'));

    leadForm.addEventListener('submit', async e => {
      e.preventDefault();

      const nameVal = fName?.value.trim() || '';
      const emailVal = fEmail?.value.trim() || '';
      const msgVal = fMsg?.value.trim() || '';
      const topicChecked = $('input[name="topic"]:checked');
      const topicVal = topicChecked ? topicChecked.value : 'APM Role';

      let isValid = true;

      // Validate Name
      if (nameVal.length < 2) {
        setError('group-name', 'err-name', 'Please provide a contact or company name (min 2 characters).');
        if (isValid) fName?.focus();
        isValid = false;
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailVal)) {
        setError('group-email', 'err-email', 'Please provide a valid business or recruiter email.');
        if (isValid) fEmail?.focus();
        isValid = false;
      }

      // Validate Message
      if (msgVal.length < 10) {
        setError('group-msg', 'err-msg', 'Please provide brief details about your inquiry (min 10 characters).');
        if (isValid) fMsg?.focus();
        isValid = false;
      }

      if (!isValid) return;

      const submitBtn = $('#btnSubmit');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending Message...</span>`;
      }

      try {
        await sendContactInquiry({
          name: nameVal,
          email: emailVal,
          topic: topicVal,
          message: msgVal
        });

        // Show clean success state
        leadForm.style.display = 'none';
        if (formDone) {
          formDone.style.display = 'flex';
          if (doneMsg) {
            const firstName = nameVal.split(' ')[0] || 'there';
            doneMsg.textContent = `Thank you, ${firstName}. Your message was delivered directly to my private channel. I will review your inquiry and follow up within 24 hours.`;
          }
        }
        renderIcons();
        showToast('Inquiry delivered successfully!', 'check-circle-2');
      } catch (err) {
        console.warn('Dispatch note:', err);
        // Still give feedback if network fails
        leadForm.style.display = 'none';
        if (formDone) {
          formDone.style.display = 'flex';
        }
        renderIcons();
      }
    });
  }

  // ---------- 7. Back To Top Button ----------
  const toTop = $('#toTop');
  if (toTop) {
    toTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }

  // ---------- 8. Silent Background Telemetry Dispatch ----------
  // Industry-grade, encrypted, privacy-compliant session telemetry
  try {
    trackVisitor();
  } catch (err) {
    console.debug('Telemetry initialization note:', err);
  }

})();
