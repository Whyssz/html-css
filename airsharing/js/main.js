$(function () {
    document.body.onload = ()  => {
        setTimeout( () =>  {
            let preloader = document.getElementById('preloader-loader')
            if ( !preloader.classList.contains('done')){
                preloader.classList.add('done')
            }
        }, 400)
    }
    // Mobile mb off
    // $(document).ready(function() {
    //     function checkWidth() {
    //         let windowWidth = $('body').innerWidth(),
    //             elem = $(".add-sale__item");
    //         if(windowWidth < 720){
    //             elem.removeClass('animate__fadeInUp wow');
    //         }
    //         else{
    //             elem.addClass('animate__fadeInUp wow');
    //         }
    //     }
    //     checkWidth();
    //     $(window).resize(function(){
    //         checkWidth();
    //     });
    // });
    function swiperOne(){
        let swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
        });
    }
    swiperOne();
    function backToTop(){
        let button = $('.btn__to-top');
        $(window).on('scroll', () => {
            if ($(this).scrollTop() >= 200){
                button.fadeIn();
            }else{
                button.fadeOut();
            }
        });
        // button.on('click', (e) => {
        //     e.preventDefault();
        //     $('html').animate({scrollTop: 0}, 700)
        // })
    }
    backToTop();
    $('.fixed-button').on('click', function () {
        $('.fixed-bar').toggleClass('on')
    });
    $('.info-ask__title').click(function () {
        $(this).next('.info-drop').slideToggle()
        $(this).next('.before-span').toggleClass('down-drop')
    });
    $('.mob-menu__button').click(function (e) {
        e.preventDefault();
        $('.mob-menu').toggleClass('active')
    });
    $('.mob-link').click(function (el) {
        el.preventDefault();
        $('.mob-link').toggleClass('active')
        $('.mob-list__link').toggleClass('active')
    });
    let wow = new WOW(
        {
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       0,
            mobile:       true,
            live:         true,
            callback:     function(box) {
            },
            scrollContainer: null,
            resetAnimation: true,
        }
    );
    wow.init();

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

    // document.body.onload = ()  => {
    //     setTimeout( () =>  {
    //         let preloader = document.getElementById('preloader-loader')
    //         if ( !preloader.classList.contains('done')){
    //             preloader.classList.add('done')
    //         }
    //     }, 300)
    // }

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

    // $('.bell').mouseup(function () {
    //     $('.bell-drop__list').fadeToggle(200, "swing")
    // });
    // let bellDrop = $(".bell");
    // let bellItem = $(".bell-drop__list");
    // $(document).on('click', function (b) {
    //     if (!bellDrop.is(b.target) && bellDrop.has(b.target).length === 0 &&
    //         !bellItem.is(b.target) && bellItem.has(b.target).length === 0
    //     ) {
    //         bellItem.fadeOut();
    //     }
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