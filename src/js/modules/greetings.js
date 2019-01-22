
function welcome() {
    var title = $('.carpet__title'),
        line = $('.carpet__line'),
        greetings = $('.carpet'),
        navTopEl = $('.navigation__elem:first'),
        navBottomEl = $('.navigation__elem:last');

    //Прячем элементы нав за края окна браузера
    var topEdge = navTopEl.offset().top - navTopEl.scrollTop();
    var bottomEdge = window.innerHeight - navBottomEl.offset().top - navBottomEl.outerHeight() - navBottomEl.scrollTop();
    navTopEl.css('top', -(topEdge+navTopEl.outerHeight()));
    navBottomEl.css('top', (navBottomEl.outerHeight()*2+bottomEdge));
    //
    var screenMid = window.innerHeight / 2;
    Velocity(title, {bottom: screenMid}, {duration: 1000, easing: 'ease'});
    Velocity(title, {opacity: 0}, {duration: 2000, delay: 400});

    var lineWidth = title.outerWidth(),
        lineLeft = Math.round(title.offset().left),
        lineRight = Math.round(title.offset().left + title.outerWidth());

        Velocity(line, {
                        top: window.innerHeight / 2
                    }, {
                        duration: 30
                    });
        Velocity(line, {
                        left: 0,
                        width: lineRight,
                        opacity: 1
                    }, {
                        duration: 400
                    });
        Velocity(line, {
                        left: lineLeft,
                        width: lineWidth
                    }, {
                        duration: 600
                    });
        Velocity(line, {
            left: window.innerWidth,
                    opacity: 0
                }, {
                    duration: 1000, 
                    delay: 1000, 
                    complete: () => {
                        Velocity(greetings, {
                            opacity: 0
                        }, {
                            duration: 1000,
                            complete: ()=> {
                                greetingsRemove();
                            }
                        });
                    }
                });
    function greetingsRemove() {
        navigationAppear();
        greetings.remove();
    }

    function navigationAppear() {
        Velocity($('.navigation__elem'), {opacity: 1});
        Velocity(navTopEl, {top: 0});
        Velocity(navBottomEl, {top: 0}, {complete: ()=> applyHover()});
    } 
    
    function applyHover() {
        $('.navigation__elem').hover(function() {
            Velocity($('#hover'), "fadeIn");
        }, function() {
            Velocity($('#hover'), "fadeOut");
        });
    }
}

module.exports = {
    welcome
};

