export const onInitialClientRender = () => {
  var pathName = document.location.pathname;
  window.addEventListener('beforeunload', function() {
      sessionStorage.setItem("scrollPosition_" + pathName, window.pageYOffset.toString());
  });
}