$(document).ready(function() {

	// initialize select
  $('select').niceSelect();

  //owl.carousele
  $(".about-carousel").owlCarousel({
  	items: 1,
  	autoWidth: true,
  	nav: true
  });

  // hover effects on button
  $(".cards-button").hover(function(){
	$(this).parent().find(".cards-price").css({"background-color" : "#2e43e5"});
  },function(){
  	$(this).parent().find(".cards-price").css({"background-color" : "#5b6ceb"});
  });

  // slick-slider
   $('.slider-for').slick({
	   slidesToShow: 1,
	   slidesToScroll: 1,
	   arrows: false,
	   dots: true,
	   fade: false,
	   asNavFor: '.slider-nav'
	 });
 $('.slider-nav').slick({
	   slidesToShow: 1,
	   slidesToScroll: 1,
	   arrows: true,
	   asNavFor: '.slider-for',
	   dots: false,
	   focusOnSelect: true
	 });


});
// end document.ready 