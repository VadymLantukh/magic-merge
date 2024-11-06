function setRandomWidthForListItems() {
  const minWidth = 683;
  const maxWidth = 862;
  const listItems = document.querySelectorAll('.review-card');

  if (window.innerWidth > 1199) {
    listItems.forEach(item => {
      const randomWidth =
        Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
      item.style.width = randomWidth + 'px';
    });
  } else {
    listItems.forEach(item => {
      item.style.width = '100%';
    });
  }
}

setRandomWidthForListItems();

window.addEventListener('resize', setRandomWidthForListItems);
