var Render = {

    //optimized render so background will only get drawn once rather than on every frame
     //and we can always call on helpers to draw any entity we pass in
    init: function (data){

        Render.helpers.drawEntity(data.entities.background, data.canvas.bgCtx);
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