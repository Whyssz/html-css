$(function () {

    $('input, select').styler();

    $('.icon-th-list').on('click', function () {
        $('.products-item').addClass('list')
        $('.icon-th').removeClass('active')
        $('.icon-th-list').addClass('active')
    });

    $('.icon-th').on('click', function () {
        $('.products-item').removeClass('list')
        $('.icon-th-list').removeClass('active')
        $('.icon-th').addClass('active')
    });
    $(".rate-star").rateYo({
        starWidth: "16px",
        rating: 4.5,
        readOnly: true,
        normalFill: 'transparent',
        ratedFill: '#ffc000',
    });
    // $(".rate-star").rateYo().on("rateyo.change", function (e, data) {
    //     let rating = data.rating;
    //     $(this).parent().find('.score').text('score :'+ $(this).attr('data-rateyo-score'));
    //     $(this).parent().find('.result').text('rating :'+ rating);
    // });
    $(".rate-star__product").rateYo({
        starWidth: "13px",
        rating: 4.5,
        readOnly: true,
        normalFill: 'transparent',
        ratedFill: '#ffc000',
    });

    $('.slider-product__inner').slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.slider-follow__inner').slick({
        infinite: true,
        dots: false,
        slidesToScroll: 3,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 763,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
        ]
    });

    $('.bell').mouseup( function () {
        $('.bell-drop__list').fadeToggle(200, "swing")
    });
    let bellDrop = $(".bell");
    let bellItem = $(".bell-drop__list");
    $(document).on('click', function (b) {
        if ( ! bellDrop.is(b.target) && bellDrop.has(b.target).length === 0 &&
            ! bellItem.is(b.target) && bellItem.has(b.target).length === 0
        ) {
            bellItem.fadeOut();
        }
    });
    $('.event').on('click', function () {
        $('.event-drop__list').fadeToggle(200, "swing")
    });
    let messDrop = $(".event");
    let messItem = $(".event-drop__list");
    $(document).on('click', function (m) {
        if ( ! messDrop.is(m.target) && messDrop.has(m.target).length === 0 &&
            ! messItem.is(m.target) && messItem.has(m.target).length === 0
        ) {
            messItem.fadeOut();
        }
    });
    $('.cart').on('click', function () {
        $('.cart-drop__list').fadeToggle(200, "swing")
    });
    let btnCategories = $(".cart");
    let categories = $(".cart-drop__list");
    $(document).on('click', function (e) {
        if ( ! btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 &&
            ! categories.is(e.target) && categories.has(e.target).length === 0
        ) {
            categories.fadeOut();
        }
    });
    $('.header__user').mouseup( function () {
        $('.header__user-drop').fadeToggle(200, "swing")
    });
    let userList = $(".header__user");
    let userMenu = $(".header__user-drop");
    $(document).on('click', function (u) {
        if ( ! userList.is(u.target) && userList.has(u.target).length === 0 &&
            ! userMenu.is(u.target) && userMenu.has(u.target).length === 0
        ) {
            userMenu.fadeOut();
        }
    });

    $('.menu-list__btn').mouseup( function () {
        $('.menu-list').fadeToggle(200, "swing")
    });
    let menuBtn = $(".menu-list__btn");
    let menuList = $(".menu-list");
    $(document).on('click', function (b) {
        if ( ! menuBtn.is(b.target) && menuBtn.has(b.target).length === 0 &&
            ! menuList.is(b.target) && menuList.has(b.target).length === 0
        ) {
            menuList.fadeOut();
        }
    });

    $('.aside-btn__category').on('click', function () {
        $('.aside-category__list').slideToggle()
    });
    $('.aside-btn__filter').on('click', function () {
        $('.aside-filter__list').slideToggle()
    });
    $('.aside-btn__price').on('click', function () {
            $('form').slideToggle()
    });

    $('.search-post').on('click', function () {
        $('.search-post__form').slideToggle()
    });
    $('.tags-post').on('click', function () {
        $('.blog-aside__tags').slideToggle()
    });
    $('.category-post').on('click', function () {
        $('.aside-category__list').slideToggle()
    });
    let behaviourSlider = document.getElementById('price-slider');

    noUiSlider.create(behaviourSlider, {
        start: [30, 300],
        step: 10,
        tooltips: true,
        mode: 'steps',
        behaviour: 'drag',
        connect: true,
        padding: [20, 50],
        margin: 110,
        range: {
            'min': -20,
            'max': 350
        },
    });
});
$ (function () {
    $('.single-product__tabs .tab').on('click', function(event) {
        let id = $(this).attr('data-id');
        $('.single-product__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.single-product__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });
    $('.aside-item__tabs .tab').on('click', function(event) {
        let id = $(this).attr('data-id');
        $('.aside-item__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.aside-item__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });

});
$(function () {
    var mixer = mixitup('.new-products__inner');
});
