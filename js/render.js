var Render = {

    //optimized render so background will only get drawn once rather than on every frame
     //and we can always call on helpers to draw any entity we pass in
    init: function (data){

        Render.helpers.drawEntity(data.entities.background, data.canvas.bgCtx);
    },

    //Need to render coins on the screen, but coins are different than background
    //because they get updated and deleted (from the array) once the character
    //has moved onto their location. So therefore we will place it in the update function.
    //Also we are "animating them" by keep deleting and putting them back.. redrawing
    //them on the board with different sprites

    update: function(data){
        //Everytime an update comes in we clear the previous foreground canvas (because all coin pieces displayed at start)
        //maybe there is a better solution
        // and the drawings on it


        data.canvas.fgCtx.clearRect(0, 0, data.canvas.fgCtx.width, data.canvas.fgCtx.height);
        //Draw coins
        data.entities.coinsArray.forEach(function (coin) {

            Render.helpers.drawEntity(coin, data.canvas.fgCtx);

        });

    },
    

    helpers: {
        
        //Need to pass in the entity (object) and the context! background or foreground!
        //To draw the image or render it, we need the sprite img, sprite src width and height
        //We already know for background is a specified width and height, we need the target
        //src and y (where we will place it on canvas) and how big we actually want to 
        //make it on the canvas

        drawEntity: function (entity, ctx){
            ctx.drawImage(entity.sprite.img,
                          entity.sprite.srcX, entity.sprite.srcY,
                          entity.sprite.srcW, entity.sprite.srcH,
                          entity.x, entity.y,
                          entity.w, entity.h
                          
                         )
        },


    }

};