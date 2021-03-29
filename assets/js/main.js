

$(window).scroll(function() {
	if($(window).scrollTop() > 100) {
		$('header').addClass('fix');
	}
	else {
		$('header').removeClass('fix');
	}
});

new WOW().init();


$('.coupon_slider').slick({
    autoplay: true,
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: '<button class="fas fa-arrow-left slick_left"></button>',
    nextArrow: '<button class="fas fa-arrow-right slick_right"></button>',
    centerMode: true,
    centerPadding: "0",
    autoplaySpeed: 5000,
    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    // asNavFor: '.slider_for',
    responsive: [
        {
        breakpoint: 992,
        settings: {
            centerMode: true,
            centerPadding: '',
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 768,
        settings: {
            centerMode: true,
            centerPadding: '',
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 575,
        settings: {
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        },
    ]
});