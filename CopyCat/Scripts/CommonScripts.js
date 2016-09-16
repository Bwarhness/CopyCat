
$(window).bind('scroll', function () {
    if (($(window).scrollTop() > 600 && $('.menu:above-the-top').length > 0)) {
        $('.menu').addClass('navbar-fixed-top');
        $('.menu h2').fadeIn();
    } else if ($(window).scrollTop() < 600)

     {
        $('.menu').removeClass('navbar-fixed-top');
        $('.menu h2').hide();

    }
});


var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $('#watch1:in-viewport').animate({ top: '-=1', left: '-=1' }, 5);
        $('#watch2:in-viewport').animate({ top: '+=1', left: '+=1' }, 5);
        $('#BlackWatch:in-viewport').animate({ top: '-=3' }, 5);
        $('#gs3f:in-viewport').animate({ top: '+=3' }, 5);
        $('#gs3c:in-viewport').animate({ top: '-=3' }, 5);
        $('#Water:in-viewport').animate({ top: '+=1' }, 5);
        $('#WaterWatch:in-viewport').animate({ top: '+=2' }, 5);
        $('#DoubleWatch:in-viewport').animate({ top: '+=2' }, 5);

        if ($('video:in-viewport').length > 0) {
            $('video:in-viewport').get(0).play();
            DoubleWatch
        }
    } else {
        $('#DoubleWatch:in-viewport').animate({ top: '-=2' }, 5);
        $('#Water:in-viewport').animate({ top: '-=1' }, 5);
        $('#WaterWatch:in-viewport').animate({ top: '-=2' }, 5);
        $('#gs3c:in-viewport').animate({ top: '+=3' }, 5);
        $('#gs3f:in-viewport').animate({ top: '-=3' }, 5);
        $('#BlackWatch:in-viewport').animate({ top: '+=3'}, 5);
        $('#watch1:in-viewport').animate({ top: '+=1', left: '+=1' }, 5);

        $('#watch2:in-viewport').animate({ top: '-=1', left: '-=1' }, 5);


    }
    lastScrollTop = st;
});
/*
 * Viewport - jQuery selectors for finding elements in viewport
 *
 * Copyright (c) 2008-2009 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *  http://www.appelsiini.net/projects/viewport
 *
 */
(function ($) {

    $.belowthefold = function (element, settings) {
        var fold = $(window).height() + $(window).scrollTop();
        return fold <= $(element).offset().top - settings.threshold;
    };

    $.abovethetop = function (element, settings) {
        var top = $(window).scrollTop();
        return top >= $(element).offset().top + $(element).height() - settings.threshold;
    };

    $.rightofscreen = function (element, settings) {
        var fold = $(window).width() + $(window).scrollLeft();
        return fold <= $(element).offset().left - settings.threshold;
    };

    $.leftofscreen = function (element, settings) {
        var left = $(window).scrollLeft();
        return left >= $(element).offset().left + $(element).width() - settings.threshold;
    };

    $.inviewport = function (element, settings) {
        return !$.rightofscreen(element, settings) && !$.leftofscreen(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
    };

    $.extend($.expr[':'], {
        "below-the-fold": function (a, i, m) {
            return $.belowthefold(a, { threshold: 0 });
        },
        "above-the-top": function (a, i, m) {
            return $.abovethetop(a, { threshold: 0 });
        },
        "left-of-screen": function (a, i, m) {
            return $.leftofscreen(a, { threshold: 0 });
        },
        "right-of-screen": function (a, i, m) {
            return $.rightofscreen(a, { threshold: 0 });
        },
        "in-viewport": function (a, i, m) {
            return $.inviewport(a, { threshold: 0 });
        }
    });


})(jQuery);