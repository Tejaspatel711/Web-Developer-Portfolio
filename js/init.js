/* ----------------------------------
Table of Content :

01 Remove Placeholder
02 Loader
03 Smooth Scrolling Using Navigation Menu
04 Navigation Menu
05 myWork Filter
06 Lightcase
07 Counter
08 Contact Form

------------------------------------ */

(function ($) {

    "use strict";

    /* ----------------------------------------------------
		1- Remove PlaceHolder.
	------------------------------------------------------- */

    $('input,textarea').focus(function () {
        $(this).data('placeholder', $(this).attr('placeholder'))
            .attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });


    /* ----------------------------------------------------
		2- Loader.
	------------------------------------------------------- */

    $(document).ready(function () {
        setTimeout(function () {
            $('body').addClass('loaded');
        }, 3000);

    });

    /* ----------------------------------------------------
		3- Smooth Scrolling Using Navigation Menu.
	------------------------------------------------------- */

    $('a[href*="#"]').on('click', function (e) {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 90
        }, 500);
        e.preventDefault();
    });


    /* ----------------------------------------------------
		4- Navigation Menu.
	------------------------------------------------------- */
    function mainMenu() {

        var barsBtn = $('.bars-btn'),
            mainMenuLeft = $('.main-menu'),
            mainMenuClose = $('.close-main-menu');

        barsBtn.on('click', function (e) {
            e.stopPropagation();
            mainMenuLeft.toggleClass("main-menu-active");

        });

        mainMenuClose.on('click', function () {
            mainMenuLeft.removeClass('main-menu-active');

        });

        mainMenuLeft.on('click', function (e) {
            e.stopPropagation();
        });

        $('body,html').on('click', function () {
            mainMenuLeft.removeClass('main-menu-active');

        });
    }

    mainMenu();
    
    // Navbar Scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 134) {
            $('#td-header').addClass('td-fixed-header');
            $('.logo').addClass('logo-active');
        } else {
            $('#td-header').removeClass('td-fixed-header');
            $('.logo').removeClass('logo-active');
        }
    });

  
    /* ----------------------------------------------------
		5- myWork Filter.
	------------------------------------------------------- */

    var containerEl = document.querySelector('.filter-items');
    var mixer = mixitup(containerEl);

    /* ----------------------------------------------------
		6- Lightcase.
	------------------------------------------------------- */

    $('a[data-rel^=lightcase]').lightcase();

    /* ----------------------------------------------------
		7- Counter.
	------------------------------------------------------- */

    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);
