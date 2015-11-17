(function() {
    'use strict';
    var config = {
        serviceOpenBtn: '.js-services-read-more',
        servicesModal: '.in-house-cap',
        serviceCloseBtn: '.js-services-close',

        povOpenBtn: '.js-pov-read-more',
        povMoreContent: '.js-pov-extra-content',
        povIntroContent: '.js-pov-content-mobile-intro'
    };

    $(config.serviceOpenBtn).click(function() {
        $(config.servicesModal).fadeIn();
        $(config.serviceOpenBtn).fadeOut();
    });

    $(config.serviceCloseBtn).click(function() {
        $(config.servicesModal).fadeOut();
        $(config.serviceOpenBtn).fadeIn();
    });

    $(config.povOpenBtn).click(function() {
        $(config.povMoreContent).fadeIn();
        $(config.povIntroContent).fadeOut();
    });
})();
