$(function () {
  function backToTop(){
    let button = $('.btn__to-top');
    $(window).on('scroll', () => {
      if ($(this).scrollTop() >= 200){
          button.fadeIn();
      }else{
          button.fadeOut();
      }
    });
  }
  backToTop();
  $('.fixed-button').on('click', function () {
    $('.fixed-bar').toggleClass('on')
  });

  //menu-drop down
  // $(window).scroll(function(){
  //   if ($(this).scrollTop() > 100) {
  //     $(".main-menu").addClass("fixed-menu")
  //   } else {
  //     $(".main-menu").removeClass("fixed-menu")
  //   }
  // });
  // $('.testy').mouseup( function () {
  //   $('.st-list').fadeToggle(200, "swing")
  // });
  // let userList = $(".bpp-content");
  // let userMenu = $(".bpp-menu");
  // $(document).on('click', function (u) {
  //   if ( ! userList.is(u.target) && userList.has(u.target).length === 0 &&
  //     ! userMenu.is(u.target) && userMenu.has(u.target).length === 0
  //   ) {
  //     userMenu.fadeOut();
  //   }
  // });
  $('.info-ask__title').click(function () {
      $(this).next('.info-drop').slideToggle()
  });
  $('.mob-st__link').click(function () {
    $(this).next('.mob-st__list').slideToggle()
    $(this).toggleClass('active')
  });
  $('.header-top__mob-but').click(function (e) {
      e.preventDefault();
      $('.header-top__mob-but').toggleClass('active')
      $('body', 'html').toggleClass('active-popup')
  });
  $('.st-link').click(function (e) {
      e.preventDefault();
  });

  $('.mob-hr__link').click(function (e) {
    e.preventDefault();
      $('body', 'html').toggleClass('active-popup')
  });
  $('.bpp-content__btn').click(function () {
    $('body', 'html').toggleClass('active-popup')
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
  $().fancybox({
    selector : '.tab-item a:visible',
    arrows: false,
    thumbs   : {
      autoStart : true
    },
  });
  function swiperOne(){
    let swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 30,
      breakpoints: {
        1800: {
          slidesPerView: 4,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        300: {
          slidesPerView: 'auto',
          spaceBetween: -20,
          navigation: false
        },
      }
    });
  }
  swiperOne();
  let swiper = new Swiper(".swiper-one", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    autoplay: {
      delay: 3500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1700: {
        slidesPerView: 4,
      },
      1300: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 2,
      },
      300: {
        slidesPerView: 'auto',
        // spaceBetween: -20,
      },
    }
  });
  $('.info-tabs .tab, .settings__tabs .tab').on('click', function(event) {
    let id = $(this).attr('data-id');
    $('.info-tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.info-tabs, .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
  });
  //-------------------------hover
  // $('.header-top__right-faq').hover(
  //   function(){ $(this).addClass('active') },
  //   function(){ $(this).removeClass('active') }
  // )
});
// $ (function () {
//   $('.compositions-items .tab').on('click', function(event) {
//     let id = $(this).attr('data-id');
//     $('.compositions-items').find('.tab-item').removeClass('active-tab').hide();
//     $('.compositions-items .tabs').find('.tab').removeClass('active');
//     $(this).addClass('active');
//     $('#'+id).addClass('active-tab').fadeIn();
//     return false;
//   });
//   $('.aside-item__tabs .tab').on('click', function(event) {
//     let id = $(this).attr('data-id');
//     $('.aside-item__tabs').find('.tab-item').removeClass('active-tab').hide();
//     $('.aside-item__tabs .tabs').find('.tab').removeClass('active');
//     $(this).addClass('active');
//     $('#'+id).addClass('active-tab').fadeIn();
//     return false;
//   });
// });
