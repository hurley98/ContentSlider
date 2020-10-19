$(document).ready(function(){
    // Set Options
    var speed = 500;//speed of transitions, fade speed
    var autoSwitch = true;//to go by itself, auto slider option
    var autoSwitchSpeed = 4000; //Auto slider speed

    // Add initial active class
    $('.slide').first().addClass('active');

    //Hide all slides
    $('.slide').hide();

    //Show first slide
    $('.active').show();

    //Next handler
    $('#next').on('click', nextSlide);
    //Prev handler
    $('#prev').on('click', prevSlide);
    //Auto slider handler
    if(autoSwitch == true){
            setInterval(nextSlide, autoSwitchSpeed);
    }

    //Switch to next slide
    function nextSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    //Switch to prev slide
    function prevSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
});