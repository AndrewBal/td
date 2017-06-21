    $(document).ready(function() {



    $("#burger").click(function(){
    $(".line_1").toggleClass("line_1_active");
    $(".line_2").toggleClass("line_2_active");
    $(".line_3").toggleClass("line_3_active");
    $(".nav_bar").toggleClass("nav_bar_open");
    $(".logo").toggleClass("logo_none");

 });

    $('.buy_slider').slick({
        centerPadding: '250px',
        slidesToShow: 5,
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
     $('.link_youtube').slick({
        centerPadding: '250px',
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<img src="./img/next_arrow.png">',
        prevArrow: '<img src="./img/prev_arrow.png">'
    }); 

     $('.review_wrap').slick({
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
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
