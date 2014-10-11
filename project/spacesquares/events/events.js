var keyboard = require('./keyboard');

module.exports = {
    keyboard: require('./keyboard'),
    init: function(){
        this.keyboard.init();
    }
};
