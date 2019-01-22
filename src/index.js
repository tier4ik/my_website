const Velocity = require('velocity-animate/velocity.min.js');
require('./sass/main.sass');
var {welcome} = require('./js/modules/greetings.js');

$(window).on('load', ()=>{
    $('body').css('opacity', 1);
    welcome();
});
