var swiperIndexSlider = new Swiper('.slider', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    speed: 1000,
    pagination: {
        el: '.slider_line',
        type: 'bullets',
        bulletElement: 'a',
        clickable: true
    },
});

var swiperPortfolio = new Swiper('.portfolio_slider', {
    slidesPerView: 2,
    loop: true,
    speed: 2000,
    centeredSlides: true,
    autoplay: false,
    pagination: {
        el: '.portfolio_line-red',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.portfolio_arrow-right',
        prevEl: '.portfolio_arrow-left',
    },
    breakpoints: {
        1600: {
            slidesPerView: 1.5,
        },
        1200: {
            slidesPerView: 1.3,
        },
        1024: {
            slidesPerView: 1,
        }
    }
});

var swiperReviews = new Swiper('.reviews_slider-container', {
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".reviews_arrow-right",
        prevEl: ".reviews_arrow-left",
    },
    thumbs: {
        swiper: {
            el: ".reviews_text",
            loop: true,
            speed: 10,
            allowTouchMove: false,
        },
    }
});

var swiperPartners = new Swiper('.partners_slider-container', {
    slidesPerView: 'auto',
    slidesPerGroup: 6,
    // centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.partners_arrow-right',
        prevEl: '.partners_arrow-left',
    },
    breakpoints: {
        1320: {
          slidesPerGroup: 4,
        },
        920: {
          slidesPerGroup: 3,
        },
        600: {
            // centeredSlides: true,
            slidesPerGroup: 1,
        }
    }
});

var swiperAdvantagesText = new Swiper('.advantages_text', {
    loop: true,
    loopedSlides: 3,
    speed: 10,
    // allowTouchMove: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

var swiperAdnvantages = new Swiper('.advantages_slider', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    speed: 1000,
    loopedSlides: 3,
    navigation: {
        nextEl: '.advantages_arrow-right',
        prevEl: '.advantages_arrow-left',
    },
    thumbs: {
        swiper: swiperAdvantagesText,
    },
});

