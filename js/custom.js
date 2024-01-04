$(function () {


    const SLIDE_WRAP = new Swiper('.Slide_wrap', {
        loop: true,
        parallax: true,
        speed: 800,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        slideActiveClass: 'on',
    });

    $('.header_top').on('click', function () {
        $('.mobile').toggleClass('on');
        $(this).toggleClass('on');
    })

});

