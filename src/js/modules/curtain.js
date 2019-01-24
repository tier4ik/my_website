function curtainGo() {
    var leftPart = $('.container__html');
    var rightPart = $('.container__animation');
    var i = 0;
    var $li = $('li');
//
    Velocity(leftPart, {
        left: 0
    }, {
        duration: 1000,
        easing: 'easeInCirc',
    });
//
    Velocity(rightPart, {
        right: 0
    }, {
        duration: 1000,
        easing: 'easeInCirc',
        complete: ()=> {
            cascadeLi(i);
        }
    });
//
    function cascadeLi(ind) {
        var t1 = new TimelineMax();
        if(ind < $li.length) {
            t1
                .to($li.eq(ind), 0.8, {css: {opacity: 1}})
                .addCallback(()=> {
                    console.log(ind);
                    ind++;
                    cascadeLi(ind);
                }, 0.05);
        }
    }
}


module.exports = {
    curtainGo
};