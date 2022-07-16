const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,

});

$('.slider_btn_prev').click(function () {

    owl.trigger('prev.owl.carousel');
})

$('.slider_btn_next').click(function () {
    owl.trigger('next.owl.carousel');
})

