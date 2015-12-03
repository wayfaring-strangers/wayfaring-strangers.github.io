;(function(){
    $(document).ready(function(){
        setImageDimensions();
    });

    $(window).resize(function(){
        console.log('resize');
        setImageDimensions();
    });

    function setImageDimensions(){
        var extraPixels = 0;

        if(navigator.userAgent.indexOf('iPhone') != -1) {
          extraPixels = 60;
        }

        var browserWidth = $(window).width();
        var browserHeight = $(window).height() + extraPixels;

        $('.page').each(function() {
            if($(this).height() < browserHeight) {
                $(this).css('height', browserHeight);
            }
            $(this).css('width', browserWidth);
        });
    }
})();
