
var Keyboard = module.exports = {
    pressed: {},
    init: function(){
        this.bindEvents();
    },
    bindEvents: function(){
        document.body.addEventListener('keydown', this.keydownHandler.bind(this));
        document.body.addEventListener('keyup', this.keyupHandler.bind(this));
    },
    keydownHandler: function(ev){
        ev.preventDefault();
        this.pressed[ev.keyCode] = true;
    },
    keyupHandler: function(ev){
        //ev.preventDefault();
        this.pressed[ev.keyCode] = false;
    },
    getPressedKeys: function(){
        return this.pressed;
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
Keyboard.init();


