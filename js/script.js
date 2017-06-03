$(document).ready(function() {
    $('.buy_slider').slick({
        centerPadding: '250px',
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: '<img src="./img/next_arrow.png">',
        prevArrow: '<img src="./img/prev_arrow.png">'
    });

    $('.recommend_wrap').slick({
        centerPadding: '250px',
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: '<img src="./img/next_arrow.png">',
        prevArrow: '<img src="./img/prev_arrow.png">'
    });

    $('#city_select > li').click(function(event) {
        $(this).children("ul").slideToggle();
        event.stopPropagation();
    });
    $('.bottom_arrow').click(function(event) {
        $('#city_select > li').children("ul").slideToggle();
        event.stopPropagation();
    });

   

});
