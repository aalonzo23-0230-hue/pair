document.addEventListener('DOMContentLoaded', function () {
  var track = document.querySelector('.cards-track');
  var prev = document.querySelector('.carousel-prev');
  var next = document.querySelector('.carousel-next');
  if (!track || !prev || !next) return;

  function getScrollAmount() {
    var card = track.querySelector('.account-card');
    if (!card) return 200;
    var style = window.getComputedStyle(track);
    var gap = parseFloat(style.gap) || 0;
    return card.offsetWidth + gap;
  }

  prev.addEventListener('click', function () {
    track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });
  next.addEventListener('click', function () {
    track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });
});

// Prevent zoom in/out
document.addEventListener('wheel', function (e) {
  if (e.ctrlKey) e.preventDefault();
}, { passive: false });

document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '_' || e.key === '0')) {
    e.preventDefault();
  }
});

document.addEventListener('touchmove', function (e) {
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });

document.addEventListener('gesturestart', function (e) { e.preventDefault(); });
document.addEventListener('gesturechange', function (e) { e.preventDefault(); });