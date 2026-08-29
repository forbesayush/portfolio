import './style.css';
import {
  createIcons,
  ArrowDownRight,
  ArrowUpRight,
  ArrowUp,
  Menu,
  X,
  Activity,
  Plus,
  Check,
  RotateCcw,
  Mail,
  FlaskConical,
  Send
} from 'lucide';
import { trackVisitor, sendContactInquiry } from './utils/telegramTracker.js';

(() => {
  'use strict';

  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer: fine)').matches;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  // Initialize Lucide icons with tree-shaken subset
  const appIcons = {
    ArrowDownRight,
    ArrowUpRight,
    ArrowUp,
    Menu,
    X,
    Activity,
    Plus,
    Check,
    RotateCcw,
    Mail,
    FlaskConical,
    Send
  };

  const renderIcons = () => {
    try {
      createIcons({ icons: appIcons });
    } catch (e) {
      console.warn('Lucide render notice:', e);
    }
  };
  renderIcons();

  /* ---------- identity & clocks (all local) ---------- */
  const vid = 'V-' + Math.random().toString(36).slice(2, 7).toUpperCase();
  const vidEl = $('#vid');
  const menuVidEl = $('#menuVid');
  if (vidEl) vidEl.textContent = vid;
  if (menuVidEl) menuVidEl.textContent = vid;

  const t0 = Date.now();
  const pad = n => String(n).padStart(2, '0');
  setInterval(() => {
    const s = Math.floor((Date.now() - t0) / 1000);
    const ses = pad(Math.floor(s / 60)) + ':' + pad(s % 60);
    const clockEl = $('#clock');
    const menuTimeEl = $('#menuTime');
    const footTimeEl = $('#footTime');
    if (clockEl) clockEl.textContent = ses;
    if (menuTimeEl) menuTimeEl.textContent = ses;
    const d = new Date();
    if (footTimeEl) {
      footTimeEl.textContent = 'YOUR TIME — ' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
    }
  }, 1000);

  /* ---------- toasts ---------- */
  const toasts = $('#toasts');
  function toast(msg, icon = 'activity') {
    if (!toasts) return;
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<i data-lucide="${icon}"></i><span>${msg}</span>`;
    toasts.appendChild(t);
    renderIcons();
    requestAnimationFrame(() => t.classList.add('in'));
    setTimeout(() => {
      t.classList.remove('in');
      setTimeout(() => t.remove(), 350);
    }, 3800);
  }

  /* ---------- custom cursor ---------- */
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, cursorOn = false;
  const dot = $('#curDot');
  const ring = $('#curRing');
  const curLbl = $('#curLbl');

  if (fine && !reduced && dot && ring && curLbl) {
    document.documentElement.classList.add('cur');
    addEventListener('pointermove', e => {
      mx = e.clientX;
      my = e.clientY;
      if (!cursorOn) {
        cursorOn = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    });
    document.addEventListener('mouseover', e => {
      const t = e.target.closest('[data-cursor]');
      if (t) {
        curLbl.textContent = t.dataset.cursor;
        ring.classList.add('on');
      } else {
        ring.classList.remove('on');
      }
    });
  } else {
    dot?.remove();
    ring?.remove();
  }

  /* ---------- hero: split headline into letters ---------- */
  $$('.h-in').forEach(el => {
    const txt = el.textContent;
    el.textContent = '';
    [...txt].forEach(ch => {
      const s = document.createElement('span');
      s.className = 'pr';
      s.textContent = ch;
      el.appendChild(s);
    });
  });

  const prs = $$('.pr');
  const wState = prs.map(() => 800);
  const heroEl = $('.hero');
  let heroVisible = true;
  if (heroEl) {
    new IntersectionObserver(([e]) => heroVisible = e.isIntersecting).observe(heroEl);
  }

  /* ---------- hero canvas: reactive dot field ---------- */
  const cv = $('#dots');
  let ctx = cv ? cv.getContext('2d') : null;
  let pts = [], cw = 0, ch = 0, cmx = -9999, cmy = -9999, tx = -9999, ty = -9999;
  const DPR = Math.min(window.devicePixelRatio || 1, 1.5);

  function buildDots() {
    if (!heroEl || !cv || !ctx) return;
    cw = heroEl.offsetWidth;
    ch = heroEl.offsetHeight;
    cv.width = cw * DPR;
    cv.height = ch * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    pts = [];
    const gap = 42;
    for (let y = gap / 2; y < ch; y += gap) {
      for (let x = gap / 2; x < cw; x += gap) {
        pts.push({ x, y, ph: Math.random() * 6.28 });
      }
    }
  }

  if (heroEl && cv) {
    heroEl.addEventListener('pointermove', e => {
      const r = cv.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
    });
    heroEl.addEventListener('pointerleave', () => {
      tx = -9999;
      ty = -9999;
    });
  }

  function drawDots(t) {
    if (!ctx) return;
    cmx += (tx - cmx) * 0.08;
    cmy += (ty - cmy) * 0.08;
    ctx.clearRect(0, 0, cw, ch);
    ctx.fillStyle = '#E9E6DA';
    ctx.globalAlpha = 0.15;
    ctx.beginPath();
    for (const p of pts) {
      const yy = reduced ? p.y : p.y + Math.sin(t / 1400 + p.ph) * 2.2;
      const dx = p.x - cmx, dy = yy - cmy, d = Math.hypot(dx, dy);
      if (d > 170) {
        ctx.rect(p.x - 1, yy - 1, 2, 2);
        continue;
      }
      const g = 1 - d / 170;
      ctx.fill();
      ctx.globalAlpha = 0.15 + 0.6 * g;
      ctx.fillStyle = `rgb(${Math.round(233 + (201 - 233) * g)},${Math.round(230 + (247 - 230) * g)},${Math.round(218 + (60 - 218) * g)})`;
      ctx.beginPath();
      ctx.arc(p.x, yy, 1 + 1.6 * g, 0, 6.29);
      ctx.fill();
      ctx.fillStyle = '#E9E6DA';
      ctx.globalAlpha = 0.15;
      ctx.beginPath();
    }
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  buildDots();
  (function loop(t) {
    if (heroVisible && !reduced) drawDots(t);
    requestAnimationFrame(loop);
  })(0);

  /* ---------- main rAF: cursor ring + variable-weight headline ---------- */
  (function main() {
    if (cursorOn && ring) {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    }
    if (fine && !reduced && heroVisible && prs.length) {
      for (let i = 0; i < prs.length; i++) {
        const r = prs[i].getBoundingClientRect();
        const d = Math.hypot(mx - (r.left + r.width / 2), my - (r.top + r.height / 2));
        const target = 800 - 560 * clamp(1 - d / 240, 0, 1);
        wState[i] += (target - wState[i]) * 0.16;
        prs[i].style.fontVariationSettings = `'opsz' 96,'wght' ${wState[i].toFixed(0)}`;
      }
    }
    requestAnimationFrame(main);
  })();

  /* ---------- tickers: duplicate sets for a seamless loop ---------- */
  [['#tick1', 2], ['#tick2', 2]].forEach(([sel]) => {
    const track = $(sel);
    if (!track) return;
    const set = track.firstElementChild;
    if (set) {
      track.appendChild(set.cloneNode(true));
      track.appendChild(set.cloneNode(true));
    }
  });

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  $$('.reveal').forEach(el => io.observe(el));

  /* ---------- count-up numbers ---------- */
  function animateCount(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    const end = parseFloat(el.dataset.count);
    const dec = +(el.dataset.dec || 0);
    const pre = el.dataset.pre || '';
    const suf = el.dataset.suf || '';
    if (reduced) {
      el.textContent = pre + end.toFixed(dec) + suf;
      return;
    }
    const s0 = performance.now();
    const dur = 1400;
    (function tick(t) {
      const p = Math.min(1, (t - s0) / dur);
      const e = 1 - Math.pow(1 - p, 4);
      const v = end * e;
      el.textContent = pre + (dec ? v.toFixed(dec) : Math.round(v).toLocaleString('en-US')) + suf;
      if (p < 1) requestAnimationFrame(tick);
    })(s0);
  }

  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      animateCount(e.target);
      cio.unobserve(e.target);
    }
  }), { threshold: 0.6 });
  $$('.num').forEach(el => cio.observe(el));

  /* ---------- sparklines ---------- */
  function spark(svg) {
    if (!svg || svg.dataset.done) return;
    svg.dataset.done = '1';
    const p = svg.querySelector('.sp-line');
    const d = svg.querySelector('.sp-dot');
    if (!p || !d) return;
    const L = p.getTotalLength();
    p.style.strokeDasharray = L;
    p.style.strokeDashoffset = L;
    p.getBoundingClientRect();
    p.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(.6,0,.2,1) .25s';
    p.style.strokeDashoffset = '0';
    d.style.transition = 'opacity .3s 1.5s';
    requestAnimationFrame(() => d.style.opacity = '1');
  }

  /* ---------- accordions (single-open) ---------- */
  function bindAcc(headSel, itemSel, onOpen) {
    $$(headSel).forEach((h, i) => h.addEventListener('click', () => {
      const item = h.closest(itemSel);
      const wasOpen = item.classList.contains('open');
      $$(itemSel).forEach(o => {
        o.classList.remove('open');
        o.querySelector(headSel)?.setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('open');
        h.setAttribute('aria-expanded', 'true');
        onOpen && onOpen(item, i);
      }
    }));
  }

  bindAcc('.case-head', '.case', (item, i) => {
    item.querySelectorAll('.num').forEach(animateCount);
    spark(item.querySelector('.spark'));
    addConv(8, 'case' + i);
  });
  bindAcc('.svc-head', '.svc');

  /* ---------- conversion meter (the page's narrative spine) ---------- */
  let conv = 0, convDone = false;
  const granted = new Set();

  function setConv(v, silent) {
    conv = clamp(Math.round(v), 0, 100);
    const convBar = $('#convBar');
    const convLbl = $('#convLbl');
    if (convBar) convBar.style.width = conv + '%';
    if (convLbl) convLbl.textContent = 'CONV ' + conv + '%';
    if (conv >= 100 && !convDone) {
      convDone = true;
      document.querySelector('.hud-bot')?.classList.add('conv-done');
      if (!silent) toast("CONVERTED — YOU'RE OFFICIALLY LEAD #204", 'check');
    }
  }

  function addConv(pts, key) {
    if (key && granted.has(key)) return;
    if (key) granted.add(key);
    setConv(conv + pts);
  }

  /* ---------- engagement meter ---------- */
  let eng = 0, lx = 0, ly = 0;
  addEventListener('pointermove', e => {
    if (lx) eng += Math.hypot(e.clientX - lx, e.clientY - ly) * 0.012;
    lx = e.clientX;
    ly = e.clientY;
  });
  addEventListener('click', () => eng += 6, { passive: true });
  setInterval(() => {
    eng = clamp(eng * 0.92, 0, 100);
    const engLbl = $('#engLbl');
    const engBar = $('#engBar');
    if (engLbl) engLbl.textContent = 'ENG ' + Math.round(eng);
    if (engBar) engBar.style.width = Math.round(eng) + '%';
  }, 400);

  /* ---------- scroll: funnel %, milestones, live funnel stage ---------- */
  const stages = $$('.f-stage');
  const stageNames = ['AWARENESS', 'INTEREST', 'CONSIDERATION', 'CONVERSION', 'RETENTION'];
  let anchors = [];

  function measure() {
    anchors = ['#about', '#work', '#experience', '#contact'].map(s => $(s)?.offsetTop || 0);
  }

  let ticking = false;
  function onScroll() {
    ticking = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    const pct = max > 0 ? clamp(scrollY / max, 0, 1) : 0;
    const funPct = $('#funPct');
    if (funPct) funPct.textContent = 'FUNNEL ' + Math.round(pct * 100) + '%';
    [[25, 'm25'], [50, 'm50'], [75, 'm75'], [100, 'm100']].forEach(([p, k]) => {
      if (pct * 100 >= p) addConv(12, k);
    });
    const pos = scrollY + innerHeight * 0.55;
    let s = 0;
    anchors.forEach(a => { if (pos >= a) s++; });
    if (scrollY + innerHeight >= document.documentElement.scrollHeight - 60) s = 4;
    const hudStage = $('#hudStage');
    if (hudStage) hudStage.textContent = '/ ' + stageNames[s];
    stages.forEach((el, i) => el.classList.toggle('is-you', i === s));
    eng = clamp(eng + 1.2, 0, 100);
  }

  addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  }, { passive: true });

  addEventListener('resize', () => {
    buildDots();
    measure();
  });
  measure();
  document.fonts?.ready.then(measure);
  onScroll();

  /* ---------- CTA hover feeds the meter ---------- */
  $$('.btn').forEach(b => b.addEventListener('mouseenter', () => addConv(5, 'cta')));

  /* ---------- the live A/B experiment ---------- */
  const dw = { A: 0, B: 0 };
  let hov = null, hovT0 = 0, voted = false;
  const expVote = $('#expVote');
  const expResult = $('#expResult');

  $$('.variant').forEach(v => {
    const k = v.dataset.v;
    const lbl = v.querySelector('.dwell');
    v.addEventListener('mouseenter', () => {
      if (voted) return;
      hov = k;
      hovT0 = performance.now();
    });
    v.addEventListener('mouseleave', () => {
      if (hov === k) {
        dw[k] += performance.now() - hovT0;
        hov = null;
        if (lbl) lbl.textContent = 'YOUR DWELL: ' + (dw[k] / 1000).toFixed(1) + 'S';
      }
    });
  });

  setInterval(() => {
    if (hov) {
      const el = document.querySelector(`.variant[data-v="${hov}"] .dwell`);
      if (el) {
        el.textContent = 'YOUR DWELL: ' + ((dw[hov] + performance.now() - hovT0) / 1000).toFixed(1) + 'S';
      }
    }
  }, 120);

  function vote(k) {
    if (voted) return;
    voted = true;
    if (hov) {
      dw[hov] += performance.now() - hovT0;
      hov = null;
    }
    addConv(15, 'vote');
    $$('.variant').forEach(v => v.classList.toggle('picked', v.dataset.v === k));
    if (expVote) expVote.hidden = true;
    if (expResult) expResult.hidden = false;
    const resPick = $('#resPick');
    const resDwell = $('#resDwell');
    const resExtra = $('#resExtra');
    if (resPick) resPick.textContent = k;
    if (resDwell) {
      resDwell.textContent = `YOUR HOVER TELEMETRY — A: ${(dw.A / 1000).toFixed(1)}S · B: ${(dw.B / 1000).toFixed(1)}S`;
    }
    if (resExtra) {
      resExtra.textContent = (dw.A + dw.B < 400)
        ? 'DWELL UNDER 0.4S — DECISIVE. I LIKE THAT IN A CLIENT.'
        : 'DWELL TIME PREDICTS CHOICE BETTER THAN PEOPLE ADMIT. YOURS JUST DID.';
    }
    renderIcons();
    requestAnimationFrame(() => $$('.rbar i').forEach(el => el.style.width = el.dataset.w + '%'));
    toast('VOTE RECORDED — SAMPLE SIZE: YOU', 'flask-conical');
  }

  $$('[data-pick]').forEach(b => b.addEventListener('click', () => vote(b.dataset.pick)));

  const expReset = $('#expReset');
  if (expReset) {
    expReset.addEventListener('click', () => {
      voted = false;
      dw.A = 0;
      dw.B = 0;
      $$('.variant').forEach(v => {
        v.classList.remove('picked');
        const dwellEl = v.querySelector('.dwell');
        if (dwellEl) dwellEl.textContent = 'YOUR DWELL: 0.0S';
      });
      if (expResult) expResult.hidden = true;
      if (expVote) expVote.hidden = false;
      $$('.rbar i').forEach(el => el.style.width = '0');
    });
  }

  /* ---------- lead form: inline validation + live Telegram dispatch ---------- */
  const form = $('#leadForm');
  function setErr(input, msg) {
    const f = input.closest('.field');
    if (!f) return;
    const errEl = f.querySelector('.err');
    if (errEl) errEl.textContent = msg;
    f.classList.remove('bad');
    void f.offsetWidth; // restart shake
    if (msg) f.classList.add('bad');
  }

  if (form) {
    form.querySelectorAll('input,textarea').forEach(el =>
      el.addEventListener('input', () => setErr(el, '')));

    form.addEventListener('submit', async e => {
      e.preventDefault();
      const name = $('#fName');
      const email = $('#fEmail');
      const msg = $('#fMsg');
      const budgetChecked = $('input[name="budget"]:checked');
      const budgetVal = budgetChecked ? budgetChecked.value : '5-15L';

      let ok = true;
      if (name.value.trim().length < 2) {
        setErr(name, 'Two characters minimum — even for an alias.');
        ok = false;
      }
      if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
        setErr(email, 'That email would bounce. Hard.');
        ok = false;
      }
      if (msg.value.trim().length < 10) {
        setErr(msg, 'Give me at least a sentence to work with.');
        ok = false;
      }
      if (!ok) {
        toast('FORM HAS FRICTION — FIX THE FIELDS IN RED', 'activity');
        return;
      }

      form.hidden = true;
      const done = $('#formDone');
      if (done) done.hidden = false;
      const doneMsg = $('#doneMsg');
      if (doneMsg) {
        doneMsg.textContent = `Thanks, ${name.value.trim().split(' ')[0]} — reply inbound within 24 hours. Usually faster. Now go check the corner: your conversion meter just closed.`;
      }
      renderIcons();
      setConv(100, true);
      toast('LEAD #204 CAPTURED — CHECK YOUR INBOX SOON', 'send');

      // Dispatch to Ayush's Telegram
      try {
        await sendContactInquiry({
          name: name.value.trim(),
          email: email.value.trim(),
          topic: `Growth Project (Budget: ${budgetVal})`,
          message: msg.value.trim()
        });
      } catch (err) {
        console.warn('Telegram dispatch error:', err);
      }
    });
  }

  /* ---------- mobile menu ---------- */
  const menu = $('#menu');
  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  $('#menuBtn')?.addEventListener('click', () => setMenu(true));
  $('#menuX')?.addEventListener('click', () => setMenu(false));
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  $$('.menu-nav a').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const target = $(a.getAttribute('href'));
    setMenu(false);
    setTimeout(() => target?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }), 420);
  }));

  /* ---------- back to top ---------- */
  $('#toTop')?.addEventListener('click', () =>
    scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }));

  /* ---------- welcome nudge & live Telegram visitor tracking ---------- */
  setTimeout(() => toast('SESSION STARTED — YOU ARE NOW TRAFFIC. WELCOME.', 'activity'), 1400);

  // Trigger encrypted visitor telemetry tracking
  trackVisitor();

})();
