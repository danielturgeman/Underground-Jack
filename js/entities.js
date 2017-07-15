var Entities = {

    init: function (data){

        
        var background = {
            //background img coordinates starts from 0,35 (35 down from y axis)
            sprite: new Entities.helpers.Sprite(data.spriteSheet, 0, 35, 256, 200),
            //Not src anymore, canvas target coordinates
            x: 0,
            y: 0,
            w: 768,
            h: 600

        };

        data.entities = {};
        data.entities.background = background;


        
    },

    helpers: {

        //Helper class(object literal) constructor for sprites
        Sprite: function(img, srcX, srcY, srcW, srcH){

            this.img = img;
            this.srcX = srcX;
            this.srcY = srcY;
            this.srcW = srcW;
            this.srcH = srcH;

        }
    }

}