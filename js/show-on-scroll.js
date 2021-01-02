
$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.last').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){

            $('.hide-me').animate({'opacity':'1'},500).addClass("w3-animate-bottom")
            $('.last').animate({'opacity':'1'},500).addClass("w3-animate-bottom")

        }

    }); 

});

$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.last-s').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){

            $('.hide-me-s').animate({'opacity':'1'},500).addClass("w3-animate-bottom")
            $('.hide-me-sl').animate({'opacity':'1'},500).addClass("w3-animate-left")

        }

    }); 

});

$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.last-1').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){

            $('.last-1t').animate({'opacity':'1'},500).addClass("w3-animate-top")
            $('.last-1b').animate({'opacity':'1'},500).addClass("w3-animate-bottom")

        }

    }); 

});

$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.last-2').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){

            $('.last-2t').animate({'opacity':'1'},500).addClass("w3-animate-top")
            $('.last-2b').animate({'opacity':'1'},500).addClass("w3-animate-bottom")

        }

    }); 

});

