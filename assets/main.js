(function(){

  var menu = document.getElementById("menu-icon");
  menu.onclick = onClickMenu;

  var navigation = document.getElementById("navigation");

  var fullscreenNavigation = document.getElementById("fullscreen-navigation");

  var close = document.getElementById("close");
  close.onclick = onClose;

  function onClickMenu() {
    fullscreenNavigation.style.display = "flex"
    close.style.display = "block";
    menu.style.display = "none";
  }

  function onClose() {
    menu.style.display = "block";
    fullscreenNavigation.style.display = "none"
    close.style.display = "none";
  }


})();