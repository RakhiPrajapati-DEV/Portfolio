/* =============================================
   RAKHI PRAJAPATI — PORTFOLIO
   main.js  —  GSAP Animations & Interactions
   ============================================= */

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* ── CURSOR ──────────────────────────────────── */
const cur  = document.getElementById('cur');
const cur2 = document.getElementById('cur2');

if (window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('mousemove', e => {
    gsap.to(cur,  { x: e.clientX, y: e.clientY, duration: .1 });
    gsap.to(cur2, { x: e.clientX, y: e.clientY, duration: .38, ease: 'power2.out' });
  });
  document.querySelectorAll('a, button, .pc, .af, .sk-tag, .edu-card, .cert-item').forEach(el => {
    el.addEventListener('mouseenter', () => { cur.classList.add('hov');    cur2.classList.add('hov');    });
    el.addEventListener('mouseleave', () => { cur.classList.remove('hov'); cur2.classList.remove('hov'); });
  });
}

/* ── LOADER ──────────────────────────────────── */
window.addEventListener('load', () => {
  const mono = document.getElementById('ldMono');
  const sub  = document.getElementById('ldSub');
  const fill = document.getElementById('ldFill');

  const tl = gsap.timeline();
  tl.to(mono, { opacity: 1, y: 0, duration: .8,  ease: 'power3.out' })
    .to(sub,  { opacity: 1, y: 0, duration: .6,  ease: 'power3.out' }, '-=.3')
    .to(fill, { width: '100%',    duration: 1.2, ease: 'power2.inOut' }, '-=.4')
    .to('#loader', {
      clipPath: 'inset(0 0 100% 0)',
      duration: .9, ease: 'power4.inOut', delay: .3,
      onComplete() {
        document.getElementById('loader').style.display = 'none';
        heroIn();
      }
    });
});

/* ── HERO ANIMATION ──────────────────────────── */
function heroIn() {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
  tl.to('.hero-tag',   { opacity: 1, y: 0, duration: .7  }, .1)
    .to('#hn1t',       { y: '0%',          duration: 1.1  }, .2)
    .to('#hn2t',       { y: '0%',          duration: 1.1  }, .3)
    .to('.hero-role',  { opacity: 1, y: 0, duration: .7  }, .6)
    .to('#heroPara',   { opacity: 1, y: 0, duration: .8  }, .7)
    .to('#heroCtas',   { opacity: 1, y: 0, duration: .7  }, .8)
    .to('#heroStats',  { opacity: 1, y: 0, duration: .7  }, .85)
    .to('#heroImgCol', { opacity: 1, y: 0, duration: 1,   ease: 'power3.out' }, .4);
}

/* ── SCROLL REVEALS ──────────────────────────── */
gsap.utils.toArray('.rv').forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, y: 28 },
    {
      opacity: 1, y: 0, duration: .9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true }
    }
  );
});

/* ── SKILL BARS ──────────────────────────────── */
document.querySelectorAll('.skill-item').forEach(item => {
  ScrollTrigger.create({
    trigger: item, start: 'top 86%', once: true,
    onEnter() {
      gsap.to(item.querySelector('.skill-fill'), {
        width: item.dataset.lvl + '%',
        duration: 1.5, ease: 'power3.out', delay: .1
      });
    }
  });
});

/* ── NAV SCROLL ──────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('stuck', window.scrollY > 40);
});

/* ── HAMBURGER MENU ──────────────────────────── */
const nBurger = document.getElementById('nBurger');
const mobMenu = document.getElementById('mobMenu');

nBurger.addEventListener('click', () => {
  nBurger.classList.toggle('open');
  mobMenu.classList.toggle('open');
});
mobMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    nBurger.classList.remove('open');
    mobMenu.classList.remove('open');
  });
});

/* ── SMOOTH SCROLL ───────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      gsap.to(window, { scrollTo: { y: target, offsetY: 68 }, duration: 1.1, ease: 'power3.inOut' });
    }
  });
});

/* ── PROJECT CARD 3D TILT ────────────────────── */
document.querySelectorAll('.pc').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    gsap.to(card, {
      rotateX: ((e.clientY - r.top)  / r.height - .5) * -7,
      rotateY: ((e.clientX - r.left) / r.width  - .5) *  7,
      duration: .45, ease: 'power2.out',
      transformPerspective: 900
    });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { rotateX: 0, rotateY: 0, duration: .7, ease: 'elastic.out(1,.6)' });
  });
});

/* ── MAGNETIC BUTTONS ────────────────────────── */
document.querySelectorAll('.btn-rose, .btn-soft, .n-hire').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    gsap.to(btn, {
      x: (e.clientX - r.left - r.width  / 2) * .22,
      y: (e.clientY - r.top  - r.height / 2) * .22,
      duration: .4, ease: 'power2.out'
    });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: .65, ease: 'elastic.out(1,.5)' });
  });
});

/* ══════════════════════════════════════════════
   CONTACT FORM — FORMSPREE
   ══════════════════════════════════════════════
   SETUP (sirf ek baar karna hai):
   1. formspree.io pe jaao → free account banao
   2. "New Form" → email: contactrakhiprajapati@gmail.com
   3. Form ID milega jaise: xyzabc12
   4. Neeche YOUR_FORM_ID ki jagah woh ID paste karo
   ══════════════════════════════════════════════ */

const FORMSPREE_URL = 'https://formspree.io/f/xkoqejky';
//                                              ↑↑ Sirf yahan apna ID daalo ↑↑

/* ─── Form elements ─────────────────────────── */
const cForm = document.getElementById('cForm');
const cfBtn = document.getElementById('cfBtn');
const cfOk  = document.getElementById('cfOk');
const cfErr = document.getElementById('cfErr');

/* ─── Submit handler ────────────────────────── */
cForm.addEventListener('submit', async function(e) {
  e.preventDefault();

  /* Agar ID set nahi ki toh warning dikhao */
  if (FORMSPREE_URL.includes('YOUR_FORM_ID')) {
    showMsg(cfErr, '⚠ Pehle main.js mein Formspree ID set karo!');
    return;
  }

  /* Button → loading state */
  const origTxt = cfBtn.textContent;
  cfBtn.textContent = 'Sending...';
  cfBtn.disabled    = true;
  cfBtn.style.opacity = '0.7';

  hideAll();

  /* FormData collect karo */
  const data = new FormData(cForm);

  try {
    const res = await fetch(FORMSPREE_URL, {
      method:  'POST',
      body:    data,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      /* ✅ SUCCESS */
      cForm.reset();
      showMsg(cfOk, '✦  Message sent! I\'ll reply within 24 hours.');
    } else {
      /* ❌ SERVER ERROR */
      const json = await res.json().catch(() => ({}));
      const msg  = (json.errors || []).map(x => x.message).join(', ') || 'Server error. Please try again.';
      showMsg(cfErr, '✗  ' + msg);
    }

  } catch (err) {
    /* ❌ NETWORK ERROR */
    showMsg(cfErr, '✗  Network error. Check internet connection.');
  }

  /* Button reset */
  cfBtn.textContent   = origTxt;
  cfBtn.disabled      = false;
  cfBtn.style.opacity = '1';
});

/* ─── Helpers ───────────────────────────────── */
function showMsg(el, text) {
  hideAll();
  el.innerHTML = text;
  el.classList.add('show');
  gsap.from(el, { opacity: 0, y: 6, duration: .5, ease: 'power3.out' });
  setTimeout(() => el.classList.remove('show'), 5000);
}

function hideAll() {
  cfOk.classList.remove('show');
  cfErr.classList.remove('show');
}
