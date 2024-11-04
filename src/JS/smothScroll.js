export const smoothScroll = target => {
  const element = document.querySelector(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - element.offsetHeight / 3,
      behavior: 'smooth',
    });
  }
};
