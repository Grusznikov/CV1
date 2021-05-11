$(document).on('scroll', function () {

  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();


  //Pierwsza sekcja
  const $art2 = $('.aboutme');
  const $art3 = $('.skills');
  const $art4 = $('.footer');
  // const $art5 = $('.popup')
  const art2FromTop = $art2.offset().top;
  const art3FromTop = $art3.offset().top;
  const art4FromTop = $art4.offset().top;
  // const art5FromTop = $art5.offset().top;
  const art2Height = $art2.outerHeight();
  const art3Height = $art3.outerHeight();
  const art4Height = $art4.outerHeight();
  // const art5Height = $art5.outerHeight();

  if (scrollValue > art2FromTop / 2 + art2Height / 2 - windowHeight) {
    $art2.addClass('active');
  }

  if (scrollValue > art3FromTop + art3Height - windowHeight * 1.4) {
    $art3.addClass('active2');
  }

  if (scrollValue > art4FromTop + art4Height - windowHeight * 2.2) {
    $art4.addClass('active3')
  }


  //Czyściciel
  if (scrollValue < 100) {
    $('.aboutme').removeClass('active');
  }
  if (scrollValue < 100) {
    $('.skills').removeClass('active2');
  }
  if (scrollValue < 100) {
    $('.footer').removeClass('active3');
  }
})

$(document).on('click', function () {
  $(".me").click(function () {
    $('html,body').animate({
        scrollTop: $(".aboutme").offset().top
      },
      'slow');
  });

  $(".knowledge").click(function () {
    $('html,body').animate({
        scrollTop: $(".skills").offset().top
      },
      'slow');
  });


  $(".contact").click(function () {
    $('html,body').animate({
        scrollTop: $(".down-side-page").offset().top
      },
      'slow');
  });

  $(".fa-envelope").click(function () {
    $('html,body').animate({
        scrollTop: $(".corespondation").offset().top
      },
      'slow')
  })
})