const Velocity = require('velocity-animate/velocity.min.js');
const io = require('socket.io-client/dist/socket.io.js');
require('./sass/main.sass');
var {promise} = require('./js/modules/greetings.js');

var socket = io();

function applyHover() {
    $('.navigation__elem').hover(function() {
        Velocity($('#hover'), "fadeIn");
    }, function() {
        Velocity($('#hover'), "fadeOut");
    });
}

$(window).on('load', ()=>{
    $('body').css('opacity', 1);
    promise.then(()=> {
       if(window.innerWidth >= 576) {
            applyHover();
        } 
    });
});

