export function greetings(navigationHoverCallback) {
    function welcome() {
        const title = $('.carpet__title'),
              line = $('.carpet__line'),
              greetings = $('.carpet'),
              navTopEl = $('.navigation__elem:first'),
              navBottomEl = $('.navigation__elem:last');
        // определяем ширину декоративной полосы
        line.css('top', window.innerHeight/2);

        //Прячем элементы нав за края окна браузера
        const topEdge = navTopEl.offset().top - navTopEl.scrollTop();
        const bottomEdge = window.innerHeight - navBottomEl.offset().top - navBottomEl.outerHeight() - navBottomEl.scrollTop();
        navTopEl.css('top', -(topEdge+navTopEl.outerHeight()));
        navBottomEl.css('top', (navBottomEl.outerHeight()*2+bottomEdge));
        
        const screenMid = window.innerHeight / 2;

        Velocity(title, {bottom: screenMid}, {duration: 1000, easing: 'ease'});
        Velocity(title, {opacity: 0}, {duration: 2000, delay: 400});

        const lineWidth = title.innerWidth(),
              lineLeft = Math.round(title.offset().left),
              lineRight = Math.round(title.offset().left + title.outerWidth());

        // Анимируем декоративную линию
        // - по окончании анимации линии проявляем навигацию
        // - по оканчании всей анимации удаляем блок с классом "carpet"
        Velocity(line, { top: window.innerHeight / 2 }, { duration: 30 });
        Velocity(line, { left: 0, width: lineRight, opacity: 1 }, { duration: 400 });
        Velocity(line, { left: lineLeft, width: lineWidth }, { duration: 600 });
        Velocity(line, 
            { 
                left: window.innerWidth,
                opacity: 0 },
            {
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
            Velocity(navBottomEl, {top: 0}, {complete: ()=> {navigationHoverCallback()}});
        } 
    }

    if($('body').hasClass('greetings-animation')) {
        welcome(); 
    }
};

