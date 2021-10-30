//classes


class Background

{

    constructor(w,h){
            this.x =0
            this.y =0
            this.with = w;
            this.height =h
            this.image =new Image()
            this.image.src =  "../images/bg.png"
    }


    draw()
    {
        //para hacer que el backgroun se mueva
        if(this.x < -canvas.with)
        {
            this.x = 0
        }
        this.x --

        //dibujar imagen
            ctx.drawImage(this.image,this.x,this.y,this.with,this.height)
            ctx.drawImage(this.image,this.x + this.with,this.y,this.with,this.height)


    }

    gameOver(){
            //texto
            ctx.font = "80px Arial"
            ctx.fill = ("Te moriste mi rey!!!",250,200)

    }
}
    class Flappy{
        constructor(x,y,w,h)
        {
            this.x = x
            this.y = y
            this.with = w;
            this.height =h
            this.vy = 2 //gravedad
            this.userPull = 0 //gravedad
            this.image =new Image()
            this.image.src = "../images/flappy.png"
        }
//metodos
        draw()
        {
            //validar gravedad


            //dibujar

            ctx.drawImage(this.image,this.x,this.y,this.with,this.height)

        }

        collision(item)
        {

            return(
                this.x < this.x + item.with &&
                this.x + this.with > item.x &&
                this.y < this.y + item.height &&
                this.y + this.height > item.y
            )

        }
    }

