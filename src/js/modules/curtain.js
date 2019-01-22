function curtainGo() {
    var leftPart = $('.container__html');
    var rightPart = $('.container__animation');

    Velocity(leftPart, {
        left: 0
    }, {
        duration: 1000,
        easing: 'easeInCirc',
    });

    Velocity(rightPart, {
        right: 0
    }, {
        duration: 1000,
        easing: 'easeInCirc',
    });
}

module.exports = {
    curtainGo
};