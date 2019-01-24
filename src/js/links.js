require('bootstrap/dist/js/bootstrap.bundle.min.js');
require('./../sass/links.sass');

$(window).on('load', ()=> {
    $('body').css({'opacity': 1});
    $('[data-toggle="popover"]').popover({trigger: 'hover'});
});
    
