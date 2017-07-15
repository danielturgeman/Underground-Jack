//Modularize it  basically (Make it into an object literal)
//Notice how this is not part of the Game namespace, so lets see how to use this mving forward


var Input = {
    //To initialize input, gets called on once and update gets called on every single tick
    init : function (data) {

        var self = this;

        //Differences between window and document can be seen here
        //http://eligeske.com/jquery/what-is-the-difference-between-document-and-window-objects-2/
        //There is a difference, in general document includes DOM elements etc,
        //Window is the parent of document, document is in the window, window has some seperate
        //properties such as length innerwidth innerheight etc, its the first thing that 
        //gets loaded into the brower this means that there is a difference between window.load
        //and document.load or document.ready

        $(window).on("keydown", function (event) {
            //using $this in here would always refer to the dom element that we attached
            //the listener too, so in case of bubbling, other dom elements could be triggered
            //but the $this would still refer to the original dom element we attached it to
            //event.target refers to the actual dom element that was clicked or triggered
            //key down -> key pressed -> keyup
            self.helpers.down[event.keyCode] = true;

        })

        $(window).on("keyup", function () {
            delete self.helpers.down[event.keyCode];
            delete self.helpers.pressed[event.keyCode];
        })

    },

    helpers : {
        
        isDown: function (code) {
            return Input.helpers.down[code];
        },

        //More like holding the button: down refers to one press
        //isPRessed refers to a press and hold as well

        isPressed: function(code){
            if(Input.helpers.pressed[code]){
                return false;
            }
            else if(Input.helpers.down[code]){
                return helpers.pressed[code] = true;
            }
                return false;
        },

        down : {},
        pressed : {}

    }

}

//Input.init();
