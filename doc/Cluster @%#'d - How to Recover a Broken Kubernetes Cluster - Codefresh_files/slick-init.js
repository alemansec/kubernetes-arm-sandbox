jQuery( function($) {

	$('.testimonial-slider').slick({
		arrows: false,
		dots: false,
		// centerMode: true,
		// centerPadding: '0px',
		speed: 600,
		infinite: true,
		autoplay: true,
		swipeToSlide: true,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'linear',
		asNavFor: '.testimonial-slider-nav',
		// adaptiveHeight: true
	});
	
	$('.testimonial-slider-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		// centerPadding: '1rem',
		asNavFor: '.testimonial-slider',
		dots: true,
		centerMode: true,
		focusOnSelect: true,
		arrows: false,
		infinite: true,
		autoplay: true
	});
});

// jQuery(function( $ ){
// 	$('.responsive-carousel').slick({
// 	  dots: false,
// 	  autoplay: true,
// 	  lazyLoad: 'progressive',
// 	  speed: 600,
// 	  arrows:true,
// 	  infinite:true,
// 	  slidesToShow: 3,
// 	  slidesToScroll: 1,
// 	  responsive: [
// 		{
// 		  breakpoint: 1024,
// 		  settings: {
// 			slidesToShow: 3,
// 			slidesToScroll: 1,
// 			lazyLoad: 'progressive',
// 			arrows:true,
// 			infinite: true,
// 			dots: false
// 		  }
// 		},
// 		{
// 		  breakpoint: 600,
// 		  settings: {
// 			arrows:true,
// 			dots: false,
// 			slidesToShow: 2,
// 			slidesToScroll: 1
// 		  }
// 		},
// 		{
// 		  breakpoint: 480,
// 		  settings: {
// 			arrows:true,
// 			dots: false,
// 			slidesToShow: 1,
// 			slidesToScroll: 1
// 		  }
// 		}
// 	  ]
// 	});
// });