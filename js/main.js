$(document).ready(function(){
    $('.faq .item .ico').on('click', function() {
        $(this).closest('.faq').find('.item').removeClass('active');
        $(this).closest('.item').addClass('active');
    });

    $(".carousel ul").length > 0 ? $(".carousel ul").bxSlider({
        minSlides: 1,
        maxSlides: 2,
        slideWidth: 230,
        slideMargin: 30,
        infiniteLoop: false,
        hideControlOnEnd: true,
        auto: false,
        nextText: '',
        prevText: '',
        responsive: true
    }) : $.noop();

    $(document).click(function (event) {
        if ($(event.target).hasClass('responsive_menu')) {
            $('.side').toggleClass('show');
            $('.fade').toggleClass('in');
        } else if($('.side').hasClass('show')) {
            $('.side').removeClass('show');
            $('.fade').toggleClass('in');
        }
    });


    $('.platform, .stage_1, .roadmap, .roadmap .left_col, .roadmap .tabs, .roadmap .map, .about, .advantages, .how_it_works, .team, .faq').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 10
    });

    $('.tabs li a').on('click', function(){
        $(this).closest('ul').find('li a').removeClass('active');
        $(this).closest('li a').addClass('active');
        return false;
    });
});
