$(document).ready(function () {

    $(window).scroll(function () {

        if ($(window).scrollTop() > 100)
            $("header").css({
                "background-color": "rgba(0,0,0,.5)"
            });

        else
            $("header").css({
                "background-color": "rgba(0,0,0,1)"
            });


    });

});

// var element = $('section.about-me');
// let indexText = 0;
// const time = 10;

// $(window).scroll(function () {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();

//     var elemTop = $(element).offset().top;
//     var elemBottom = elemTop + $(element).height();

//     if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
//         $("section.about-me article").addClass("");
//     }
// });

$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();


    //Pierwsza sekcja
    const $art = $('section.about-me article');

    const artFromTop = $art.offset().top;

    const artHeight = $art.outerHeight();

    if (scrollValue > artFromTop / 2 + artHeight / 2 - windowHeight) {
        $art.addClass('translate-about-me-modify');
    }

    //Czyściciel
    if (scrollValue < 100) {
        $('.about=me').removeClass('active');
    }
})