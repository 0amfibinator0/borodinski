$(function () {
    $('.reviews__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // imgClass: 'slick__slide',
        // asNavFor: '.reviews__slider-text',
        dotsClass: 'slider__dots',
        prevArrow: '<button class=" slick-btn slick-prev"><img src="images/arrow-left.png" alt="prev"></button>',
        nextArrow: '<button class=" slick-btn slick-next"><img src="images/arrow-right.png" alt="next"></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            },
        ]        
    });
    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth < 768) {
            $('.info__wrap').slick({
                dots: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: false
                        }
                    },
                ]
            });
        }
        else {
            $('.info__wrap').slick('unslick');
        }
    })
});