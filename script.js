(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

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
      a.addEventListener('click', function () { setMenu(false); });
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

  // Destaca no menu a seção visível
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
    if (hero) obs.observe(hero); // no topo, nenhum item fica ativo
  }
})();
