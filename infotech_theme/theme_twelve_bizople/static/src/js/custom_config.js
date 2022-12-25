    
$(document).ready(function(){
	$(function() {
		var a = 0;
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				if ( $('.counter-box').length > 0 ) {
					var oTop = $('.counter-box').offset().top - window.innerHeight;
					if (a == 0 && $(window).scrollTop() > oTop) {
						$('.counter').each(function () {
						$(this).prop('Counter',0).animate({
							Counter: $(this).text()
						}, {
							duration: 4000,
							easing: 'swing',
							step: function (now) {
								$(this).text(Math.ceil(now));
							}
							});
						}); 
						a = 1;
					}
				}
			} 
		});
		
	});
});

odoo.define('theme_twelve_bizople.custom_config', function(require){
	'use strict';
	
		require('web.dom_ready');
		var publicWidget = require('web.public.widget');
		var core = require('web.core');
		var ajax = require('web.ajax');
		var rpc = require('web.rpc');
		var _t = core._t;
	
	
		var publicWidget = require('web.public.widget');

		

		publicWidget.registry.shoppagejs = publicWidget.Widget.extend({
			selector: ".twelve_bizople_shop",
			events: {
				'click .twelve_bizople_grid_button > .grid4': '_grid4',
				'click .twelve_bizople_grid_button > .grid3': '_grid3',
				'click .twelve_bizople_grid_button > .grid2': '_grid2',
				'click .twelve_bizople_grid_button > .sale_list': '_salelist',

			},
			start: function () {
				$("body").addClass("blured-bg");
	
				/* add selector shop page start*/
				SetClass();
	
				function SetClass() {
				// before assigning class check local storage if it has any value
					$(".twelve_bizople_shop #products_grid").addClass(localStorage.getItem("class"));
					ActiveClass();
				}
	
				function ActiveClass() {
					if ($(".twelve_bizople_shop #products_grid").hasClass("o_wsale_layout_list")) {
					  $(".twelve_bizople_product_pager .o_wsale_apply_layout .sale_list").addClass("active");
					}else if ($(".twelve_bizople_shop #products_grid").hasClass("sale_layout_grid3"))  {
					  $(".twelve_bizople_product_pager .o_wsale_apply_layout .grid3").addClass("active");
					}else if ($(".twelve_bizople_shop #products_grid").hasClass("sale_layout_grid4"))  {
					  $(".twelve_bizople_product_pager .o_wsale_apply_layout .grid4").addClass("active");
					}else if ($(".twelve_bizople_shop #products_grid").hasClass("sale_layout_grid2"))  {
					  $(".twelve_bizople_product_pager .o_wsale_apply_layout .grid2").addClass("active");
					}
				}
	
				setTimeout(function(){
					$('#products_grid').fadeIn();
				}, 500);
	
				var size = $(window).width();
				if (size >= 1200){
					$(function() {
						if ( !$(".twelve_bizople_shop #products_grid .grid4").hasClass("active") && !$(".twelve_bizople_shop #products_grid .grid3").hasClass("active") && !$(".twelve_bizople_shop #products_grid .grid2").hasClass("active") && !$(".twelve_bizople_shop #products_grid .sale_list").hasClass("active")) {
						  $(".twelve_bizople_shop #products_grid .grid4").addClass("active");
						}
					});
				}
				if (size <= 1199){
					$(function() {
						if ( !$(".twelve_bizople_shop #products_grid .grid3").hasClass("active") && !$(".twelve_bizople_shop #products_grid .grid2").hasClass("active") && !$(".twelve_bizople_shop #products_grid .sale_list").hasClass("active")) {
						  $(".twelve_bizople_shop #products_grid .grid3").addClass("active");
						}
					});
				}

				$(".filter_btn").on("click", function(e) {
					$(".category-sidebar").addClass("toggled");
					$(".mobile-categ-sidebar").addClass("toggled");
					$(".blured-bg").addClass("active");
					e.stopPropagation()
				  });

				$("#category_close").on("click", function(e) {
					$(".category-sidebar").removeClass("toggled");
					$(".mobile-categ-sidebar").removeClass("toggled");
					$(".blured-bg").removeClass("active");
					e.stopPropagation()
				  });
				  $("#category_close_mobile").on("click", function(e) {
					$(".category-sidebar").removeClass("toggled");
					$(".mobile-categ-sidebar").removeClass("toggled");
					$(".blured-bg").removeClass("active");
					e.stopPropagation()
				  });
				
				/* add selector shop page end*/
	
				/* category sidebar js shop page */
				
				  /* category sidebar js end shop page */
	
			},
			

			_grid4: function () {
				if ($(".twelve_bizople_product_pager .o_wsale_apply_layout .grid4").hasClass("active")) {
				  $(".twelve_bizople_shop #products_grid").removeClass("sale_layout_grid4");
				}else {
				  $(".twelve_bizople_shop #products_grid").addClass("sale_layout_grid4");
				  localStorage.setItem("class", "sale_layout_grid4");
				  $(".twelve_bizople_shop #products_grid").removeClass("o_wsale_layout_list");
				  $(".twelve_bizople_product_pager .o_wsale_apply_layout .sale_list").removeClass("active");
				  $(".twelve_bizople_shop #products_grid").removeClass("sale_layout_grid3");
				  $(".twelve_bizople_product_pager .o_wsale_apply_layout .grid3").removeClass("active");
				  $(".twelve_bizople_shop #products_grid").removeClass("sale_layout_grid2");
				  $(".twelve_bizople_product_pager .o_wsale_apply_layout .grid2").removeClass("active");
				}
			},
	
			_grid3: function () {
				if ($(".twelve_bizople_product_pager .o_wsale_apply_layout .grid3").hasClass("active")) {
				  $(".twelve_bizople_shop #products_grid").removeClass("sale_layout_grid3");
				}else {
				  $(".twelve_bizople_shop #products_grid").addClass("sale_layout_grid3");
				  localStorage.setItem("class", "sale_layout_grid3");
				  $(".twelve_bizople_shop #products_grid").removeClass("o_wsale_layout_list");
				  $(".twelve_bizople_product_pager .o_wsale_apply_layout .sale_list").removeClass("active");
				  $(".twelve_bizople_shop #products_grid").removeClass("sale_layout_grid4");
				  $(".twelve_bizople_product_pager .o_wsale_apply_layout .grid4").removeClass("active");
				  $(".twelve_bizople_shop #products_grid").removeClass("sale_layout_grid2");
				  $(".twelve_bizople_product_pager .o_wsale_apply_layout .grid2").removeClass("active");
				}
			},
	
			_grid2: function () {
				if ($(".twelve_bizople_product_pager .o_wsale_apply_layout .grid2").hasClass("active")) {
				  $(".twelve_bizople_shop #products_grid").removeClass("sale_layout_grid2");
				}else {
				  $(".twelve_bizople_shop #products_grid").addClass("sale_layout_grid2");
				  localStorage.setItem("class", "sale_layout_grid2");
				  $(".twelve_bizople_shop #products_grid").removeClass("o_wsale_layout_list");
				  $(".twelve_bizople_product_pager .o_wsale_apply_layout .sale_list").removeClass("active");
				  $(".twelve_bizople_shop #products_grid").removeClass("sale_layout_grid4");
				  $(".twelve_bizople_product_pager .o_wsale_apply_layout .grid4").removeClass("active");
				  $(".twelve_bizople_shop #products_grid").removeClass("sale_layout_grid3");
				  $(".twelve_bizople_product_pager .o_wsale_apply_layout .grid3").removeClass("active");
				}
			},
	
			_salelist: function () {
				if ($(".twelve_bizople_product_pager .o_wsale_apply_layout .sale_list").hasClass("active")) {
				  $(".twelve_bizople_shop #products_grid").removeClass("o_wsale_layout_list");
				}else {
				  $(".twelve_bizople_shop #products_grid").addClass("o_wsale_layout_list");
				  localStorage.setItem("class", "o_wsale_layout_list");
				  $(".twelve_bizople_shop #products_grid").removeClass("sale_layout_grid3");
				  $(".twelve_bizople_product_pager .o_wsale_apply_layout .grid3").removeClass("active");
				  $(".twelve_bizople_shop #products_grid").removeClass("sale_layout_grid4");
				  $(".twelve_bizople_product_pager .o_wsale_apply_layout .grid4").removeClass("active");
				  $(".twelve_bizople_shop #products_grid").removeClass("sale_layout_grid2");
				  $(".twelve_bizople_product_pager .o_wsale_apply_layout .grid2").removeClass("active");
				}
			},
			
		});
});


