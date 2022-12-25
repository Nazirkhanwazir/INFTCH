$(document).ready(function() {
	$(window).bind('scroll', function() {
		var navHeight = $(window).height() / 3 - 70;
		if ($(window).scrollTop() > navHeight) {
		} else {
			$('.navbar').removeClass('navbar-fixed-top');
		}
	});
	
	if ($("header > nav").hasClass("header_four")) {
		 if ($("div").hasClass("homepage")) {
	 		  	$('.h16-navbar').addClass('h-top-33');
	 		}
	  }

	// image loading="lazy" attribute remove
	if ($('.images_block img.img').attr("loading")){
		$('.images_block img.img').removeAttr("loading");
	}
});

$(function() {
	if ($('#s_hero_banner').length > 0) {
		$("header").addClass("navbar-trans-header");
		$(".navbar-light").addClass("navbar-tras");
		if ($('#s_hero_banner').length > 0) {
			$("#wrap").removeClass("wrap-trans");
		}
		else {
			
			$("#wrap").addClass("wrap-trans");
		}
	} else {
		$(".navbar-light").removeClass("navbar-tras");
	}
	
});

