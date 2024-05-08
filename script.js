// highlight navlink on page scroll
$(document).ready(function () {
  $('header ul a[href*=#]').bind('click', function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 600, function () {
      location.hash = target;
    });
    return false;
  });
});
$(window).scroll(function () {
  var scrollDistance = $(window).scrollTop();
  $('section').each(function (i) {
    if ($(this).position().top <= scrollDistance) {
      $('header ul a.active').removeClass('active');
      $('header ul a').eq(i).addClass('active');
    }
  });
}).scroll();
