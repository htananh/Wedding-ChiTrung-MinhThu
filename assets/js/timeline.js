document.addEventListener('DOMContentLoaded', () => {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, options);

  timelineItems.forEach(item => {
    observer.observe(item);
  });
}); 