$('.carousel').carousel({
    interval: 5000
})
  

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $('.navbar').removeClass('navbar-dark');
    $('.navbar').addClass('navbar-light');
    $('.navbar').addClass('bg-light');
    $('.navbar').css('transition', '0.7s');
    
		console.log("OK");
	} else {
    $('.navbar').removeClass('navbar-light');
    $('.navbar').removeClass('bg-light');
    $('.navbar').addClass('navbar-dark');
    $('.navbar').css('transition', '0.7s');
  }
});