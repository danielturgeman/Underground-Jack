//For the game we are going to be following the modular design pattern. Great way to learn!

//Container or namespace Game. ITS the only thing available in the global scope of the project!
//So that we dont clutter up our global scope of the project!


//init function gets called one time only when the file loads at the very beginning it will,
//get called once.

var Game = {

    init: function() {

        var bgCanvas = $("#bg-canvas")[0];
        var fgCanvas = $("#fg-canvas")[0];

        //We need to pass the canvas along the program, so we initialize it inside Game
        //and pass it around

        var canvas = {
            bgCanvas: bgCanvas,  //can we use this.bgCanvas?
            fgCanvas: fgCanvas,  //Also we need the context, remember?
            bgCtx: bgCanvas.getContext("2d"),   //Context is what we actually draw on
            fgCtx: fgCanvas.getContext("2d")
        };

        //Background music on initiliazation of game. INSTANCE of an Audio Object!!
        var backgroundMusic = new Audio("audio/underground_theme.mp3");
        backgroundMusic.loop = true; //Audio object property.

        //Finally, lets load in our Sprite Sheet on start of game! OTherwise we have
        //no images!

        /*Testing
        var testImg = new Image();
        testImg.src="https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067";
        testImg.addEventListener('load', function () {
            alert('loaded');
        })*/

        //Create an image with JQUERY, give it an id, wait for it to load and do something
        //DOM element wrapped in jQuery, might not work like native JS new Image()
        var spriteSheet = ($("<img/>"));
        spriteSheet.attr({id: 'spritesheet', src:'img/sprite_sheet.png'});
        
        spriteSheet.load(function () {

            //var self = this;
            var spriteSheet = this;

            //information passed throughout the game to all different modules
            var data = {
                animationFrame: 0, //starts off at 0, will be upgraded
                spriteSheet: spriteSheet, //actual spritesheet image
                canvas: canvas

            };

            backgroundMusic.play(); //Once spritesheet is loaded, bg music will play

            Input.init(data);
            Entities.init(data);
            Render.init(data);

            Game.run(data);
        });

    },

    run : function (data){

        //Basically this will be the game loop! Where the game runs
        var loop = function (){
            /*Very important ordering. Get input from the user,
            update the input received from user, which move the character and animate
            the character, and then you actually need to render it on the screen. So its 
            at minimum three different processes. An example for why update before render
            is so important: say your character hits a wall and is gonna walk through it,
            we dont want to render that! 
            our update will have a physics engine which checks if the chracter hit a wall
            and will walk him back so it looks like he never went through it.
            */

            Game.input(data);
            Game.update(data);
            Game.render(data);

             //Whenevr the loop goes through, add one to animation frame - come back to this
        //Use expression called "tick", we will be able to know which tick we are on in
        //the game

        data.animationFrame++;

        //Basically this is a callback function. The window is requesting an animation
        //frame from a function. Recursively calls the loop function, waits for loop
        //Waits at least 16.7ms so we can get the 60Frames per second
        //Similar to an event listener which has an event and a callback function,
        //which sits and waits for the event to be called (asynchronous), same thing here
        //window is continuously waiting and requesting an animation frame(every 16.7ms) min
        //once it does, it calls the callback function which loops, updates the game,
        //and also add an animation frame (so we know which tick/frame we are on)

        window.requestAnimationFrame(loop);
        
        }

        loop();

    },

    input: function (data) {
        
    },

    update: function (data) {

    },

    render: function (data){

        Render.update(data);
    }



};
//Very neat trick, JQuery doesnt only return DOM element, to access DOM use index
//console.log($("#bg-canvas")[0]);
Game.init();
//Game.run();