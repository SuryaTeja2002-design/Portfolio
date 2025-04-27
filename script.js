// GSAP or Vanilla smooth entrance
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('#hero h1');
    const heroSubtitle = document.querySelector('#hero p');
    const heroButton = document.querySelector('.btn');
  
    heroTitle.style.opacity = 0;
    heroSubtitle.style.opacity = 0;
    heroButton.style.opacity = 0;
  
    setTimeout(() => {
      heroTitle.style.transition = "1s";
      heroSubtitle.style.transition = "1s";
      heroButton.style.transition = "1s";
  
      heroTitle.style.opacity = 1;
      heroSubtitle.style.opacity = 1;
      heroButton.style.opacity = 1;
    }, 300);
  });
  
  // Animate on Scroll
  function animateOnScroll(selector, offset = 100) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - offset) {
        el.classList.add('show');
      }
    });
  }
  
  document.addEventListener('scroll', () => {
    animateOnScroll('.timeline-container');
    animateOnScroll('.skill-category');
    animateOnScroll('.project-card');
    animateOnScroll('.contact-links');
  });
  
  // Optional: throttling scroll event (for performance)
  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        animateOnScroll('.timeline-container');
        animateOnScroll('.skill-category');
        animateOnScroll('.project-card');
        animateOnScroll('.contact-links');
        ticking = false;
      });
      ticking = true;
    }
  });

  document.addEventListener('scroll', () => {
    const projects = document.querySelectorAll('.project-card');
    const contacts = document.querySelectorAll('.contact-link');
    
    projects.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add('show');
      }
    });
  
    contacts.forEach(link => {
      const rect = link.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        link.classList.add('show');
      }
    });
  });

  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80
      },
      "size": {
        "value": 3
      },
      "move": {
        "speed": 1
      },
      "line_linked": {
        "enable": true
      }
    }
  });
  
  