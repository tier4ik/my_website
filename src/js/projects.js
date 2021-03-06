const Velocity = require('velocity-animate/velocity.min.js');
const TweenMax = require('gsap/TweenMax.js');
const TimelineMax = require('gsap/TimelineMax.js');
var {curtainGo} = require('./modules/curtain.js');
const GeminiScrollbar = require('gemini-scrollbar');
require('./../sass/projects.sass');

$(window).on('load', ()=> {
	Velocity($('body'), {opacity: 1}, {duration: 500});
	curtainGo();

	if(window.innerWidth >= 576) {
		new GeminiScrollbar({
			element: document.querySelector('.html__box')
		}).create();

		new GeminiScrollbar({
			element: document.querySelector('.animation__box')
		}).create(); 
	}
});
