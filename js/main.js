$(function () {
    const email = document.querySelector("#email");
    email.addEventListener("click", function() {
        document.execCommand("copy");
    });
    email.addEventListener("copy", function(event) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", email.textContent);
        }
    });
    function swiperOne(){
        let swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            // loop: true,
            spaceBetween: 40,
            breakpoints: {
                1320: {
                    slidesPerView: 3,
                },
                800: {
                    slidesPerView: 2,
                },
                300: {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                },
            }
        });
    }
    swiperOne();

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
});