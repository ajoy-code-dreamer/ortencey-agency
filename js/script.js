// ===== jQuery operation =====
$(function () {
    // === counter up ===
    $(".counter").counterUp({
        delay: 10,
        time: 1000,
    });
    // === counter up ===
    // === slick slider operation ===
    $(".portfolio_slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".prev_arrow",
        nextArrow: ".next_arrow",
    });
    // === slick slider operation ===
});
// ===== jQuery operation =====
