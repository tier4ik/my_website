function curtainGo() {
    var $liHtml = $('.html__elem');
    var $liAnim = $('.animation__elem');
    var i = 0;
    var j = 0;
    var leftPart = $('.container__html');
    var rightPart = $('.container__animation');
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
            cascadeLiHtml(i);
            cascadeLiAnim(j);
        }
    });
//
    
    function cascadeLiHtml(ind) {
        if($liHtml.eq(ind) == undefined) return false;
        Velocity($liHtml.eq(ind), {
            opacity: 1
        }, {
            duration: 1000,
            progress: (elems, complete, remaining, start, tweenValue)=> {
                if(remaining >= 600) {
                    ind++;
                    cascadeLiHtml(ind);
                }
            }
        });
    }
    function cascadeLiAnim(ind) {
        if($liAnim.eq(ind) == undefined) return false;
        Velocity($liAnim.eq(ind), {
            opacity: 1
        }, {
            duration: 1000,
            progress: (elems, complete, remaining, start, tweenValue)=> {
                if(remaining >= 600) {
                    ind++;
                    cascadeLiAnim(ind);
                }
            }
        });
    }
}

module.exports = {
    curtainGo
};