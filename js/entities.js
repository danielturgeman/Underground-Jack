var Entities = {

    init: function (data){

        //for multiple backgrounds perhaps an array of diff sprite background img
        var background = {
            //background img coordinates starts from 0,35 (35 down from y axis)
            sprite: new Entities.helpers.Sprite(data.spriteSheet, 0, 35, 256, 200),
            //Not src anymore, canvas target coordinates
            x: 0,
            y: 0,
            w: 768,
            h: 600

        };

        var coinLocations = [[249,150], [297,150], [345,150], [393,150], [441,150],
        [201,246], [249,246], [297,246], [345,246], [393,246], [441,246], [489,246],
        [201,342], [249,342], [297,342], [345,342], [393,342], [441,342], [489,342]];


        data.entities = {};
        data.entities.background = background;
        data.entities.coinsArray = [];

        //method in array prototype //this creates new coins with a specific location and w/h
        //after this we actually need to render this on the screen
        coinLocations.forEach(function(location) {            //spritesheet we splice
            data.entities.coinsArray.push(new Entities.helpers.Coin(data.spriteSheet, location[0], location[1], 30, 42));
        });

        },


    helpers: {

        //Helper class(object literal) constructor for sprites used to create all sprites!
        //Not just one type. This is all src stuff, not targetting anything in here
        //We target seperately in other constructors or object literals
        Sprite: function(img, srcX, srcY, srcW, srcH){

            this.img = img;
            this.srcX = srcX;
            this.srcY = srcY;
            this.srcW = srcW;
            this.srcH = srcH;

        },

        Coin: function(img, targetX, targetY, targetW, targetH){
            
            //self now has a reference to whichever Coin object we are on (constructor)
            var self = this;
            this.type = "coin";
            this.sound = new Audio("audio/lumberjack_coin.mp3");
            //this.sprite = new Entities.helpers.Sprite(img, srcX, srcY, srcW, srcH);
            //There will be many "targets" due to many coins so we have many different locatins 
            //To create coin animatiion we need 4 different sprites in our case, start with originl coin

            this.sprite = new Entities.helpers.Sprite(img, 99, 0, 10, 14);
           this.spriteAnimations = {
                spin: {
                    frames: [new Entities.helpers.Sprite(img, 99, 0, 10, 14),
                             new Entities.helpers.Sprite(img, 115, 0, 10, 14),
                             new Entities.helpers.Sprite(img, 131, 0, 10, 14),
                             new Entities.helpers.Sprite(img, 147, 0, 10, 14)],

                    currentFrame: 0
                }
            }

            this.states = {
                spinning: {
                    animation: function (data){
                        //every 13 frames
                        //change the coin sprite to the sprite of currentframe
                        if(data.animationFrame % 13 == 0){
                            self.sprite = self.spriteAnimations.spin.frames[self.spriteAnimations.spin.currentFrame];
                            self.spriteAnimations.spin.currentFrame++;
                            if(self.spriteAnimations.spin.currentFrame > 3){
                                self.spriteAnimations.spin.currentFrame = 0;
                            }
                        }
                    }
                }
            }

            this.currentState = self.states.spinning;
            this.x = targetX;
            this.y = targetY;
            this.w = targetW;
            this.h = targetH;



        }
    }

}