;(function(){
    var hamburger = $('.hamburger'),
        hamburgerX = $('.hamburgerx'),
        menu = $('.header-menu'),
        menuBlock = $('.mobile-menu-block'),
        menuLinks = $('.header-menu li'),
        mq = window.matchMedia("(max-width: 850px)");
        browserHeight = $(window).height() + getExtraPixels();
        config = {
            'hamburger': 'url("../images/burger.png")',
            'hamburgerX': 'url("../images/burgerX.png")',
        };

    hamburger.click(function() {
        OpenMenu();
        headerHeightMobile();
    });

    hamburgerX.click(function () {
        closeMenu();
    });

    menuLinks.each(function(link){
        $(this).click(function(){
            closeMenu();
        });
    });

    function OpenMenu() {
        hamburger.fadeOut();
        hamburgerX.fadeIn('fast');
        menuBlock.fadeIn('fast');
        menu.addClass('menu-open');
    }

    function closeMenu() {
        hamburgerX.fadeOut();
        hamburger.fadeIn('fast');
        menu.removeClass('menu-open');
        menu.css('height', 0);
    }

    function getExtraPixels() {
        if(navigator.userAgent.indexOf('iPhone') != -1) {
          return 60;
        }

        return 0;
    }

    function headerHeightMobile(){
        if(mq.matches) {
            menu.css('height', browserHeight);
        } else {
            menu.css('height', '80px');
        }
    }
})();
