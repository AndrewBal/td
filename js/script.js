$(document).ready(function() {
    $('.recommend_wrap').slick({
        centerPadding: '250px',
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true
    });

    $('#city_select > li').click(function(event) {
        $(this).children("ul").slideToggle();
        event.stopPropagation();
    });
    $('.bottom_arrow').click(function(event) {
        $('#city_select > li').children("ul").slideToggle();
        event.stopPropagation();
    });

    $('.buy_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

});
