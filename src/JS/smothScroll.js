export const smoothScroll = target => {
  const element = document.querySelector(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  }
};
