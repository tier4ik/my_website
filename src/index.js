const Velocity = require('velocity-animate/velocity.min.js');
require('./sass/main.sass');
var {welcome} = require('./js/greetings.js');

$(window).on('load', ()=>{
    $('body').css('opacity', 1);
    welcome();
});

$('.navigation__elem').hover(function() {
    Velocity($('#hover'), "fadeIn");
}, function() {
    Velocity($('#hover'), "fadeOut");
});