const Velocity = require('velocity-animate/velocity.min.js');
require('./sass/main.sass');
const { greetings } = require('./js/modules/greetings.js');

function applyHover() {
    if(window.innerWidth >= 576) {
        $('.navigation__elem').hover(function() {
            Velocity($('#hover'), "fadeIn");
        }, function() {
            Velocity($('#hover'), "fadeOut");
        });
    } 
    $('body').removeClass('greetings-animation');
}

$(window).on('load', ()=>{
    const cookies = document.cookie;
    const isFirstTime = cookies.indexOf('session_exist') === -1;
    if(isFirstTime) {
        document.cookie = "session_exist=true; max-age=3600; path=/";
        $('body').addClass('greetings-animation').css('opacity', '1');
        greetings(applyHover);
    } else {
        Velocity($('body'), {opacity: 1}, {duration: 500});
    }
});

