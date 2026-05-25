// Smooth navbar shadow on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 20) {
    navbar.style.borderBottomColor = '#b4b2a9';
  } else {
    navbar.style.borderBottomColor = '#d3d1c7';
  }
});

// Animate skill bars on scroll into view
const skillFills = document.querySelectorAll('.skill-fill');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.style.width;
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => {
  const targetWidth = fill.style.width;
  fill.style.width = '0%';
  setTimeout(() => {
    observer.observe(fill);
    fill.style.width = targetWidth;
  }, 200);
});