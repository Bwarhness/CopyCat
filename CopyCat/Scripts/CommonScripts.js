$('video').each(function () {
    if ($(this).is(":in-viewport")) {
        $(this)[0].play();
    } else {
        $(this)[0].pause();
    }
})
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 600) {
        $('.menu').addClass('navbar-fixed-top');
        $('.menu h2').fadeIn();
    } else {
        $('.menu').removeClass('navbar-fixed-top');
        $('.menu h2').hide();

    }
});


var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $('#watch1').animate({ top: '-=1', left: '-=1' }, 5);
        $('#watch2').animate({ top: '+=1', left: '+=1' }, 5);
        if ($('#BlackWatch').is(":in-viewport")) {
            $('#BlackWatch').animate({ top: '+=1' }, 5);

        }

    } else {
        if ($('#BlackWatch').is(":in-viewport")) {
            console.log("bla")
            $('#BlackWatch').animate({ top: '-=10' }, 5);

        }

        $('#watch1').animate({ top: '+=1', left: '+=1' }, 5);

        $('#watch2').animate({ top: '-=1', left: '-=1' }, 5);


    }
    lastScrollTop = st;
});