(function() {
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    els.forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      } else {
        obs.observe(el);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      requestAnimationFrame(function() { requestAnimationFrame(initReveal); });
    });
  } else {
    requestAnimationFrame(function() { requestAnimationFrame(initReveal); });
  }
  window.addEventListener('load', function() {
    requestAnimationFrame(function() { requestAnimationFrame(initReveal); });
  });
})();
