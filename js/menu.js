;(function(){
    var hamburger = $('.hamburger'),
    hamburgerX = $('.hamburgerx'),
    menu = $('.header-menu'),
    config = {
        'hamburger': 'url("../images/burger.png")',
        'hamburgerX': 'url("../images/burgerX.png")'
    };

  hamburger.click(function() {
    OpenMenu();
  });

  hamburgerX.click(function () {
    closeMenu();
  });

  function OpenMenu() {
    hamburger.fadeOut();
    hamburgerX.fadeIn('fast');
    menu.addClass('menu-open');
  }

  function closeMenu() {
    hamburgerX.fadeOut();
    hamburger.fadeIn('fast');
    menu.removeClass('menu-open');
  }

})();
