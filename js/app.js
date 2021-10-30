//classes
const canvas =  document.getElementById("canvas")
const ctx = canvas.getContext("2d")

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

    }

}