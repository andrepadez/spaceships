
var Keyboard = module.exports = {
    enabled: false,
    handlers: [],
    init: function(){
        console.log('keyboard is listening');
    },
    add: function(handler, scope){
        var bound = handler.bind(scope);
        this.handlers.push(bound);
        document.body.addEventListener('keydown', function(ev){
            bound(ev);
        });
    },
    
    KEYS: {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        ENTER: 13,
        SPACE: 32,
        ESC: 27
    }
};



