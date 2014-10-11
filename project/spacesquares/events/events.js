var keyboard = require('./keyboard');

module.exports = {
    keyboard: keyboard,
    add: function(handler, scope){
        keyboard.add(handler, scope);
    }
};
