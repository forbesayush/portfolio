import './style.css';
import {
  trackVisitor,
  sendContactInquiry,
  trackResumeDownload,
  trackCaseStudyView,
  trackThemeSwitch,
  trackHighEngagement,
  trackOutboundChannel
} from './utils/telegramTracker.js';

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

  // ---------- 2.5 Work Samples Tab Switcher ----------
  $$('.sample-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      $$('.sample-tab').forEach(t => {
        const isActive = t === tab;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', String(isActive));
      });
      $$('.sample-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === targetId);
      });
      const title = tab.querySelector('.tab-title')?.textContent || 'Sample';
      const metric = tab.querySelector('.tab-metric')?.textContent || '';
      trackCaseStudyView(title, metric);
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

  // ---------- 5. Product Test Analytics & Feature Tracking ----------
  async function startProductTestAnalytics() {
    let sessionId = null;
    try {
      const start = await fetch('/api/session/start', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ analyticsConsent: true, source: document.referrer || 'direct' })
      });

      if (start.ok) {
        const data = await start.json();
        sessionId = data.sessionId;
      }
    } catch (_) {}

    function send(url, data) {
      if (!sessionId) return;
      const body = JSON.stringify({ sessionId, ...data });

      if (navigator.sendBeacon) {
        navigator.sendBeacon(url, new Blob([body], { type: 'application/json' }));
      } else {
        fetch(url, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body,
          keepalive: true
        }).catch(() => {});
      }
    }

    function featureUsed(feature, action = 'used') {
      send('/api/event', { feature, action });
    }

    // Count time only while the tab is visible; server caps each heartbeat.
    setInterval(() => {
      if (document.visibilityState !== 'visible' || !sessionId) return;

      fetch('/api/session/heartbeat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ sessionId })
      }).catch(() => {});
    }, 25000);

    window.addEventListener('pagehide', () => {
      if (sessionId) {
        send('/api/session/end', {});
      }
    });

    // Track product features with instant Telegram notifications:
    // 1. Resume downloads:
    $$('a[href*="CV.pdf"], a[href*="MBA_PM.pdf"]').forEach(el => {
      el.addEventListener('click', () => {
        featureUsed('resume_download', 'clicked');
        trackResumeDownload({ source: el.className || 'swiss_editorial', fileName: 'Ayush_Chatterjee_CV.pdf' });
      });
    });

    // 2. STAR breakdown toggles:
    $$('.project-toggle-btn').forEach(el => {
      el.addEventListener('click', () => {
        const target = el.getAttribute('data-target') || 'project';
        featureUsed(`case_study_${target}`, 'toggled');
        
        const projectMap = {
          'details-oneplus': { name: 'OnePlus OxygenOS QA', metric: '-22% Defects', cat: 'Consumer Tech / OS' },
          'details-innovist': { name: 'Innovist D2C E-Commerce', metric: '9 SKUs / 17% Deficit', cat: 'E-Commerce / D2C' },
          'details-ddzire': { name: 'D-Dzire Jewels MIS', metric: '-35% Cycle / 8 DBs', cat: 'Retail Tech / MIS' },
          'details-swash': { name: 'Swash Consulting SEO', metric: '+15% Traffic / -30% Time', cat: 'SEO & Media' }
        };
        const proj = projectMap[target] || { name: target, metric: 'Case Study', cat: 'Portfolio' };
        trackCaseStudyView({ project: proj.name, metric: proj.metric, category: proj.cat });
      });
    });

    // 3. Social & outbound contact channels:
    $$('a[href*="linkedin.com"]').forEach(el => {
      el.addEventListener('click', () => {
        featureUsed('linkedin_channel', 'clicked');
        trackOutboundChannel({ channel: 'LinkedIn Profile', url: el.href });
      });
    });
    $$('a[href*="github.com"]').forEach(el => {
      el.addEventListener('click', () => {
        featureUsed('github_channel', 'clicked');
        trackOutboundChannel({ channel: 'GitHub Codebase', url: el.href });
      });
    });
    $$('a[href^="mailto:"]').forEach(el => {
      el.addEventListener('click', () => {
        featureUsed('email_channel', 'clicked');
        trackOutboundChannel({ channel: 'Direct Email', url: el.href });
      });
    });

    // 4. Theme switch to Netflix Mode:
    $$('.nav-netflix-btn, a[href*="netflix"]').forEach(el => {
      el.addEventListener('click', () => {
        featureUsed('theme_switch', 'netflix');
        trackThemeSwitch({ fromTheme: 'Swiss Editorial', toTheme: 'Netflix Cinematic' });
      });
    });

    // 5. High engagement milestones (60s and 120s active reading):
    let elapsedActiveSec = 0;
    setInterval(() => {
      if (document.visibilityState === 'visible') {
        elapsedActiveSec += 5;
        if (elapsedActiveSec === 60 || elapsedActiveSec === 120) {
          const scrollPct = Math.min(100, Math.round(((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100));
          trackHighEngagement({ activeSeconds: elapsedActiveSec, scrollDepth: scrollPct });
        }
      }
    }, 5000);

    // 6. Contact form submission:
    $('#leadForm')?.addEventListener('submit', () => {
      featureUsed('recruiter_form', 'submitted');
    });

    window.productAnalytics = { featureUsed, sessionId };
    return { featureUsed, sessionId };
  }

  // Expose globally
  window.startProductTestAnalytics = startProductTestAnalytics;

  // Auto-activate when user interacts or when consent is already granted
  if (localStorage.getItem('analyticsConsent') === 'true') {
    startProductTestAnalytics();
  } else {
    const onFirstInteraction = () => {
      localStorage.setItem('analyticsConsent', 'true');
      startProductTestAnalytics();
      window.removeEventListener('click', onFirstInteraction);
      window.removeEventListener('scroll', onFirstInteraction);
    };
    window.addEventListener('click', onFirstInteraction, { once: true });
    window.addEventListener('scroll', onFirstInteraction, { once: true });
  }

  // ---------- 6. Silent Background Visitor Telemetry ----------
  try {
    trackVisitor();
  } catch (err) {
    console.debug('Telemetry initialization notice:', err);
  }

})();
