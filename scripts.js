document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.navbar__menu');
  
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  
    document.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  });
  