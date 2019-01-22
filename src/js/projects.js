const Velocity = require('velocity-animate/velocity.min.js');
var {curtainGo} = require('./modules/curtain.js');

require('./../sass/projects.sass');

$(window).on('load', ()=> {
    $('body').css('opacity', 1);
    curtainGo();
});
