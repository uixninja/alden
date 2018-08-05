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


    $('.platform, .stage_1 .text, .stage_1 .picture .stage1_1, .roadmap, .roadmap .left_col, .roadmap .tabs, .roadmap .item, .about .picture .about_1, .advantages, .how_it_works, .team, .faq').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 10
    });

    $('.stage_1 .picture .stage1_5, .about .picture .about_5').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 10
    });

    $('.stage_1 .picture .stage1_3, .about .picture .about_4').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 100
    });

    $('.stage_1 .picture .stage1_4, .about .picture .about_3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 130
    });

    $('.about .picture .about_2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 0
    });
/*
    var scene = document.getElementById('scene1');
    var parallaxInstance = new Parallax(scene, {
       // relativeInput: true
    });

    parallaxInstance.friction(0, 0.6);*/

});
