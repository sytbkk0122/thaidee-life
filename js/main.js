/* ===== 泰迪生活 Thaidee Life — Main JS ===== */

/* ---------- Constants ---------- */
const SITE = {
  ig:      'https://www.instagram.com/thaidee_life/',
  youtube: 'https://www.youtube.com/@thaidee_life',
  line:    'https://line.me/R/ti/p/@468nnetj',
  name:    '泰迪生活 Thaidee Life',
};

/* ---------- Header HTML ---------- */
const headerHTML = `
<header class="site-header" id="site-header">
  <div class="container">
    <nav class="nav">
      <a href="/index.html" class="nav-logo" aria-label="${SITE.name} 首頁">
        <div class="nav-logo-icon">🐻</div>
        <div class="nav-logo-text">
          <span class="nav-logo-zh">泰迪生活</span>
          <span class="nav-logo-en">THAIDEE LIFE</span>
        </div>
      </a>

      <div class="nav-links">
        <a href="/index.html" data-page="index">首頁</a>
        <a href="/services.html" data-page="services">服務項目</a>
        <a href="/partners.html" data-page="partners">合作商家</a>
        <a href="/blog.html" data-page="blog">生活指南</a>
        <a href="/about.html" data-page="about">關於我們</a>
        <a href="/contact.html" data-page="contact">立即諮詢</a>
      </div>

      <div class="nav-cta">
        <div class="nav-social">
          <a href="${SITE.ig}" target="_blank" rel="noopener" aria-label="Instagram" title="追蹤 IG">📸</a>
          <a href="${SITE.youtube}" target="_blank" rel="noopener" aria-label="YouTube" title="訂閱 YouTube">▶️</a>
          <a href="${SITE.line}" target="_blank" rel="noopener" aria-label="LINE" title="加 LINE">💬</a>
        </div>
        <a href="/contact.html" class="btn btn-primary" style="padding:10px 20px;font-size:0.9rem;">免費諮詢</a>
      </div>

      <button class="hamburger" id="hamburger" aria-label="選單" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <div class="mobile-nav" id="mobile-nav">
      <a href="/index.html">🏠 首頁</a>
      <a href="/services.html">🛎️ 服務項目</a>
      <a href="/partners.html">🤝 合作商家</a>
      <a href="/blog.html">📖 生活指南</a>
      <a href="/about.html">👋 關於我們</a>
      <a href="/contact.html">📩 立即諮詢</a>
      <div class="mobile-nav-social">
        <a href="${SITE.ig}" target="_blank" rel="noopener">📸 Instagram</a>
        <a href="${SITE.youtube}" target="_blank" rel="noopener">▶️ YouTube</a>
        <a href="${SITE.line}" target="_blank" rel="noopener">💬 LINE</a>
      </div>
    </div>
  </div>
</header>`;

/* ---------- Footer HTML ---------- */
const footerHTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo-zh">🐻 泰迪生活</div>
        <div class="footer-logo-en">THAIDEE LIFE</div>
        <p>一站式台灣人在泰的生活服務平台。<br>簽證、住宿、金融稅務、語言、在地客服，<br>讓外派更簡單。</p>
        <div class="footer-social">
          <a href="${SITE.ig}"      target="_blank" rel="noopener" aria-label="Instagram">📸</a>
          <a href="${SITE.youtube}" target="_blank" rel="noopener" aria-label="YouTube">▶️</a>
          <a href="${SITE.line}"    target="_blank" rel="noopener" aria-label="LINE">💬</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>服務項目</h4>
        <ul>
          <li><a href="/services.html#visa">🛂 簽證辦理</a></li>
          <li><a href="/services.html#housing">🏠 住宿協助</a></li>
          <li><a href="/services.html#finance">💰 金融稅務</a></li>
          <li><a href="/services.html#language">🗣️ 語言支援</a></li>
          <li><a href="/services.html#support">📞 在地客服</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>快速連結</h4>
        <ul>
          <li><a href="/partners.html">合作商家</a></li>
          <li><a href="/blog.html">生活指南</a></li>
          <li><a href="/about.html">關於我們</a></li>
          <li><a href="/contact.html">立即諮詢</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>聯絡我們</h4>
        <ul>
          <li><a href="${SITE.line}">LINE：@468nnetj</a></li>
          <li><a href="${SITE.ig}">IG：@thaidee_life</a></li>
          <li><a href="${SITE.youtube}">YouTube：@thaidee_life</a></li>
          <li><a href="/contact.html">線上諮詢表單</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2024 泰迪生活 Thaidee Life. All rights reserved.</p>
      <div class="footer-bottom-links">
        <a href="/privacy.html">隱私政策</a>
        <a href="/terms.html">服務條款</a>
        <a href="/sitemap.xml">網站地圖</a>
      </div>
    </div>
  </div>
</footer>

<!-- LINE Float Button -->
<a href="${SITE.line}" target="_blank" rel="noopener" class="line-float" aria-label="加 LINE 諮詢" title="加 LINE 免費諮詢">💬</a>

<!-- Scroll to Top -->
<button class="scroll-top" id="scroll-top" aria-label="回到頂部">↑</button>`;

/* ---------- Inject Header & Footer ---------- */
function injectLayout() {
  // Header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.outerHTML = headerHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  }

  // Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  // Mark active nav link
  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
      if (a.dataset.page === page) a.classList.add('active');
    });
  }
}

/* ---------- Header scroll effect ---------- */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ---------- Hamburger ---------- */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });
}

/* ---------- Scroll to top ---------- */
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- Reveal on scroll (Intersection Observer) ---------- */
function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ---------- Social Feed Tabs ---------- */
function initFeedTabs() {
  const tabs  = document.querySelectorAll('.feed-tab');
  const panels = document.querySelectorAll('.feed-panel');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t  => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById('panel-' + tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
}

/* ---------- Instagram oEmbed embed ---------- */
async function loadIGEmbed(container, postUrl) {
  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/instagram_oembed?url=${encodeURIComponent(postUrl)}&maxwidth=400&omitscript=true`
    );
    if (res.ok) {
      const data = await res.json();
      container.innerHTML = data.html;
      if (window.instgrm) window.instgrm.Embeds.process();
    }
  } catch (_) {
    // fallback: show placeholder link
  }
}

/* ---------- Load IG embed script once ---------- */
function loadIGScript() {
  if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
    const s = document.createElement('script');
    s.src = 'https://www.instagram.com/embed.js';
    s.async = true;
    document.body.appendChild(s);
  }
}

/* ---------- Contact form ---------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // In production: replace with Formspree or EmailJS
    const success = document.getElementById('form-success');
    if (success) {
      success.style.display = 'block';
      form.reset();
      setTimeout(() => { success.style.display = 'none'; }, 5000);
    }
  });
}

/* ---------- Smooth anchor scroll ---------- */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ---------- Number counter animation ---------- */
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el  = entry.target;
      const end = parseInt(el.dataset.count);
      const dur = 1800;
      const step = end / (dur / 16);
      let cur = 0;
      const timer = setInterval(() => {
        cur = Math.min(cur + step, end);
        el.textContent = Math.floor(cur) + (el.dataset.suffix || '');
        if (cur >= end) clearInterval(timer);
      }, 16);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  injectLayout();
  initHeader();
  initHamburger();
  initScrollTop();
  initReveal();
  initFeedTabs();
  initContactForm();
  initSmoothAnchors();
  animateCounters();
  loadIGScript();
});
