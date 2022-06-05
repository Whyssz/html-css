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
});