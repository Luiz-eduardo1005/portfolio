(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');

  // Ano do rodapé
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // Tema
  var themeBtn = document.querySelector('.theme-toggle');
  var mq = window.matchMedia('(prefers-color-scheme: light)');
  var saved = null;
  try { saved = localStorage.getItem('tema'); } catch (e) { saved = null; }

  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    var dark = t === 'dark';
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#0b1222' : '#f4f7fb');
    if (!themeBtn) return;
    themeBtn.setAttribute('aria-pressed', String(dark));
    themeBtn.setAttribute('aria-label', dark ? 'Tema escuro' : 'Tema claro');
  }

  applyTheme(saved === 'light' || saved === 'dark' ? saved : (mq.matches ? 'light' : 'dark'));

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('tema', next); } catch (e) { saved = null; }
    });
  }

  // Menu mobile
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('menu-principal');
  var links = nav ? nav.querySelectorAll('a') : [];

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    links.forEach(function (a) {
      a.addEventListener('click', function () { setTimeout(function () { setMenu(false); }, 0); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 651px)').addEventListener('change', function (m) {
      if (m.matches) setMenu(false);
    });
  }

  // Link ativo do menu
  if ('IntersectionObserver' in window && links.length) {
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute('aria-current'); });
        var a = map[en.target.id];
        if (a) a.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(map).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) obs.observe(s);
    });
    var hero = document.querySelector('.hero');
    if (hero) obs.observe(hero);
  }
})();
