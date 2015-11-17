;(function(){
    $('.home-arrow').click(function(){
        $('html body').animate({
          scrollTop: $("#about").offset().top
        },1000);
    });

    $('.about-arrow').click(function(){
        $('html body').animate({
          scrollTop: $("#pov").offset().top
        },1000);
    });


    $('.pov-arrow').click(function(){
        $('html body').animate({
          scrollTop: $("#approach").offset().top
        },1000);
    });


    $('.approach-arrow').click(function(){
        $('html body').animate({
          scrollTop: $("#services").offset().top
        },1000);
    });

    $('.services-arrow').click(function(){
        $('html body').animate({
          scrollTop: $("#contact").offset().top
        },1000);
    });
})();
