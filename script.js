const navToggle = document.getElementById('nav-toggle');
const container = document.getElementById('container');

navToggle.addEventListener('click', () => {
    navToggle.style.cursor = 'pointer';
  container.classList.toggle('show-nav');
});