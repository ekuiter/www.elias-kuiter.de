export const onInitialClientRender = () => {
  window.setTimeout(function() {
    const element = window.location.hash && document.querySelector(window.location.hash);
    if (window.scrollTo && element)
      window.scrollTo(0, element.offsetTop);
  }, 100);
}