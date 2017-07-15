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
            this.type = "coin";
            this.sound = new Audio("audio/lumberjack_coin.mp3");
            //this.sprite = new Entities.helpers.Sprite(img, srcX, srcY, srcW, srcH);
            //There will be many "targets" due to many coins so we have many different locatins 
            this.sprite = new Entities.helpers.Sprite(img, 99, 0, 10, 14);

            this.x = targetX;
            this.y = targetY;
            this.w = targetW;
            this.h = targetH;



        }
    }

}