$(function () {
    document.body.onload = ()  => {
        setTimeout( () =>  {
            let preloader = document.getElementById('preloader-loader')
            if ( !preloader.classList.contains('done')){
                preloader.classList.add('done')
            }
        }, 300)
    }
    function swiperOne(){
        let swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
        });
    }
    swiperOne();
    function swiperTwo(){
        let swiper = new Swiper('.swiper-container2', {
            slidesPerView: 3,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination2',
                clickable: true,
            },
            breakpoints: {
                1000: {
                    slidesPerView: 3,
                },
                750: {
                    slidesPerView: 2,
                },
                300: {
                    slidesPerView: 'auto',
                },
            }
        });
    }
    swiperTwo();
    function swiperTree(){
        let swiper = new Swiper('.swiper-container3', {
            slidesPerView: 3,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination2',
                clickable: true,
            },
            breakpoints: {
                1000: {
                    slidesPerView: 3,
                },
                750: {
                    slidesPerView: 2,
                },
                300: {
                    slidesPerView: 'auto',
                },
            }
        });
    }
    swiperTree();
    function swiperFour(){
        let swiper = new Swiper('.swiper-container4', {
            slidesPerView: 6,
            loop: true,
            freeMode: true,
            spaceBetween: 30,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1000: {
                    slidesPerView: 6,
                },
                750: {
                    slidesPerView: 4,
                },
                300: {
                    slidesPerView: 'auto',
                },
            }
        });
    }
    swiperFour();
    function mixitUp(){
        $('.data-fancybox').fancybox({
            youtube : {
                controls : 0,
                showinfo : 0
            },
            vimeo : {
                color : 'f00',
            },
        });
    }
    mixitUp();
    $('.userInput').focus(function () {
        $(this).parent().addClass('focus')
    }).blur(function () {
        if($(this).val() === ''){
            $(this).parent().removeClass('focus')
        }
    });
    $('.header-btn').mouseup(function () {
        $('.header-menu__list').fadeToggle(200, "swing")
        $('.header-btn').addClass('menu-on')
    });
    let bellDrop = $(".header-btn");
    let bellItem = $(".header-menu__list");
    $(document).on('click', function (b) {
        if (!bellDrop.is(b.target) && bellDrop.has(b.target).length === 0 &&
            !bellItem.is(b.target) && bellItem.has(b.target).length === 0
        ) {
            bellItem.fadeOut();
            $('.header-btn').removeClass('menu-on')
        }
    });
    // $('.benchmarks-item__num').each(function () {
    //     $(this).prop('Counter', 0).animate({
    //         Counter: $(this).data('value')
    //     }, {
    //         duration: 4000,
    //         easing: 'swing',
    //         step: function (now) {
    //             $(this).text(Math.ceil(this.Counter));
    //         }
    //     });
    // });
    function scrollEvent() {
        let hT = $('.benchmarks__inner').offset().top,
            hH = $('.benchmarks-item').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH)){
            $('.benchmarks-item__num').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).data('value')
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });

            });
        }
    }
    window.addEventListener("scroll", scrollEvent);

    function mixit() {
        let mixer = mixitup('.portfolio-works__inner');
    }
    mixit();
    // function backToTop(){
    //     let button = $('.btn__to-top');
    //     $(window).on('scroll', () => {
    //         if ($(this).scrollTop() >= 900){
    //             button.fadeIn();
    //         }else{
    //             button.fadeOut();
    //         }
    //     });
    //     button.on('click', (e) => {
    //         e.preventDefault();
    //         $('html').animate({scrollTop: 0}, 700)
    //     })
    // }
    // backToTop();

    // $('.icon-th-list').on('click', function () {
    //     $('.product__item').addClass('list')
    //     $('.icon-th-large').removeClass('active')
    //     $('.icon-th-list').addClass('active')
    // });

    // $('.icon-th-large').on('click', function () {
    //     $('.product__item').removeClass('list')
    //     $('.icon-th-list').removeClass('active')
    //     $('.icon-th-large').addClass('active')
    // });


    // $(".rate-star").rateYo().on("rateyo.change", function (e, data) {
    //     let rating = data.rating;
    //     $(this).parent().find('.score').text('score :'+ $(this).attr('data-rateyo-score'));
    //     $(this).parent().find('.result').text('rating :'+ rating);
    // });

    // $('.aside-btn__category').on('click', function () {
    //     $('.aside-category__list').slideToggle()
    // });
})