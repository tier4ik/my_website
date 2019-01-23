const Velocity = require('velocity-animate/velocity.min.js');
var {curtainGo} = require('./modules/curtain.js');
const GeminiScrollbar = require('gemini-scrollbar');
require('./../sass/projects.sass');

$(window).on('load', ()=> {
    $('body').css('opacity', 1);
    curtainGo();

    var myScrollbar = new GeminiScrollbar({
        element: document.querySelector('.html__box')
    }).create();
    console.log($('img').length);
});
