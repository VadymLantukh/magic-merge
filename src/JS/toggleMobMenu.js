import { smoothScroll } from './smothScroll.js';

const burgerBtnEl = document.querySelector('.burger-btn');
const closeBtnEl = document.querySelector('.close-menu-btn');
const mobMenu = document.querySelector('.mob-menu');
const bodyEl = document.querySelector('body');
const bgMobMenuEl = document.querySelector('.bg-mob-menu');
const listNavLink = document.querySelector('.list-mob-nav');

const toggleScroll = isOpen => {
  isOpen
    ? (bodyEl.style.overflow = 'hidden')
    : (bodyEl.style.overflow = 'auto');
};

const toggleMobMenu = () => {
  const isOpenMob = mobMenu.classList.toggle('is-open');
  bgMobMenuEl.classList.toggle('is-open');
  toggleScroll(isOpenMob);
};

listNavLink.addEventListener('click', evt => {
  evt.preventDefault();
  const link = evt.target.closest('a');
  if (!link) return;

  const target = link.getAttribute('href');

  toggleMobMenu();
  smoothScroll(target);
});

bgMobMenuEl.addEventListener('click', evt => {
  if (evt.target === bgMobMenuEl) {
    toggleMobMenu();
  }
});

burgerBtnEl.addEventListener('click', toggleMobMenu);
closeBtnEl.addEventListener('click', toggleMobMenu);

export default toggleMobMenu;
