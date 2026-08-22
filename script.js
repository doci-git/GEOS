const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuBtn?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    projectCards.forEach(otherCard => {
      if (otherCard !== card) otherCard.classList.remove('is-open');
    });
    card.classList.toggle('is-open');
  });

  card.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => event.stopPropagation());
  });
});

document.addEventListener('click', event => {
  if (!event.target.closest('.project-card')) {
    projectCards.forEach(card => card.classList.remove('is-open'));
  }
});
