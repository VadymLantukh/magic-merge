const burgerBtnEl = document.querySelector('.burger-btn');
const closeBtnEl = document.querySelector('.close-menu-btn');
const mobMenu = document.querySelector('.mob-menu');
const bodyEl = document.querySelector('body');
const bgMobMenuEl = document.querySelector('.bg-mob-menu');

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

burgerBtnEl.addEventListener('click', toggleMobMenu);
closeBtnEl.addEventListener('click', toggleMobMenu);

export default toggleMobMenu;
