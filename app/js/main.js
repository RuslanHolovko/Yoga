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

});
// end document.ready 