export const onInitialClientRender = () => {
  let i = 0;

  window.setTimeout(function scrollToAnchor() {
    if (window.scrollTo) {
      i++;
      const element = window.location.hash && document.querySelector(window.location.hash);
      const scrollPosition = parseInt(window.localStorage.getItem('scrollPosition'), 10);
      const y = element
        ? element.offsetTop
        : !isNaN(scrollPosition)
          ? scrollPosition
          : 0;
      window.scrollTo(0, y);
      if (window.location.hash && !element && i < 10)
        window.setTimeout(scrollToAnchor, 100);
    }
  }, 100);

  window.addEventListener('beforeunload', () => {
    window.localStorage.setItem('scrollPosition', window.pageYOffset);
  });
}