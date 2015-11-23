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


    $(document).ready(function(){
        headerHeightMobile();
    });

    hamburger.click(function() {
        OpenMenu();
    });

    hamburgerX.click(function () {
        closeMenu();
    });

    menuLinks.each(function(link){
        $(this).click(function(){
            closeMenu();
        });
    });

    $(window).resize(function(){
        headerHeightMobile();
    });

    function OpenMenu() {
        hamburger.fadeOut();
        hamburgerX.fadeIn('fast');
        menu.addClass('menu-open');
        menuBlock.addClass('mobile-block-show');
    }

    function closeMenu() {
        hamburgerX.fadeOut();
        hamburger.fadeIn('fast');
        menu.removeClass('menu-open');
        menuBlock.removeClass('mobile-block-show');
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
        }
    }
})();
