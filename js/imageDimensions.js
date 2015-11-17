;(function(){
  $(document).ready(function(){
    setImageDimensions();
  });

  $(window).resize(function(){
    setImageDimensions();
  });

    function setImageDimensions(){
        // var mq = window.matchMedia("(min-width: 500px)");
        // if mq.matches

        var extraPixels = 0;

        if(navigator.userAgent.indexOf('iPhone') != -1) {
          extraPixels = 60;
        }

        var browserWidth = $(window).width();
        var browserHeight = $(window).height() + extraPixels;

        $('.page').each(function() {
            if($(this).height() < browserHeight) {
                $(this).css('width', browserWidth);
                $(this).css('height', browserHeight);
            }
        });
    }
})();
