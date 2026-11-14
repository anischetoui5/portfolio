// Shared behaviour for every page: theme toggle + nav border on scroll.
(function () {
  const root = document.documentElement;

  const toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Clubs accordion (Experiences page)
  const panels = document.querySelectorAll('.panel');
  panels.forEach((panel) => {
    panel.addEventListener('click', () => {
      panels.forEach((p) => {
        p.classList.remove('active');
        p.setAttribute('aria-pressed', 'false');
      });
      panel.classList.add('active');
      panel.setAttribute('aria-pressed', 'true');
    });
  });
})();
