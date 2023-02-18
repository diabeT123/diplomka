
    
$(function () {
    new Swiper('.achiev__slider-first', {
        slidesPerView: 4,
        spaceBetween: 30,
        mousewheel: true,
        loop: true,
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1.2,
            },
            570: {
                slidesPerView: 1.6,
            },
            650: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
    new Swiper('.achiev__slider-second', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1.2,
            },
            570: {
                slidesPerView: 1.6,
            },
            650: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
    new Swiper('.blogs__row ', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 1.6,
            },
            650: {
                slidesPerView: 2,
            },
            850: {
                slidesPerView: 3,
            },

        },
    });


        new Swiper('.packages__list--hidden', {
            slidesPerView: 2,
            loop: true,
            mousewheel: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                350: {
                    slidesPerView: 1.1,
                    spaceBetween: 15,

                },
                500: {
                    slidesPerView: 1.6,
                },
                650: {
                    slidesPerView: 2,
                },
                1000 : {
                    slidesPerView: 0,
                },

    
            },
        })
        new Swiper('.saying__row--hidden', {
            slidesPerView: 2,
            loop: true,
            mousewheel: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                400: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,

                },
                500: {
                    slidesPerView: 2,
                },
                800: {
                    slidesPerView: 3,
                },
    
            },
        })

    $('.faq__accordeon-item').on('click', function () {
        $(this).children('.faq__accordeon-text').slideToggle()
    })
    $('.faq__accordeon-item').on('click', function () {
        $(this).toggleClass('faq__accordeon-item--active')
    })

    if($(window).width() <= 700){
        $(".footer__col").on('click', function (e) {
            // e.preventDefault()
            $(this).children('.footer__col-list').slideToggle()
        })

        $('.footer__col-title').on('click', function () {
            $(this).toggleClass('footer__col-title--active')
        })
    }
    $(".footer__col-title").on('click', function(e){
        e.preventDefault()
    
    })
    $(".footer__col-link ").on("click", function(e){
        e.preventDefault()
        var id = $(this).attr('href'),
        top=$(id).offset().top -1
        $('body,html').animate({scrollTop:top}, 800 )
    })
    SmoothScroll({
        animationTime : 900,
        stepSize : 150,
        accelerationDelta : 100,
        accelerationMax : 2,
        keyboardSupport : true,
        arrowScroll : 50,
        pulseAlgorithm : true,
        pulseScale : 5,
        pulseNormalize : 1,
        touchpadSupport : true,
        })


})
