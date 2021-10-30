window.onload = function() {

  //llamar classes
  const bg = new Background(canvas.width,canvas.height)
  const flappy = new Flappy(20,40,30,30)

  document.getElementById("start-button").onclick = function() {
    if(requestId)
    {
      return true
    }
    startGame();
  };

  function startGame() {

    requestId = requestAnimationFrame(update)

  }

  function gameOver(){

    bg.gameOver()
    requestId = undefined
  }

  function update(){

    frames ++
    //limpiar canvas
    ctx.clearRect(0,0,canvas.width,canvas.height)
    bg.draw()
    flappy.draw()
    generatePipes()
    drawPipes()
    ctx.font= "40px Arial"

    ctx.fillText(`Score: ${points}`,600,100)

    if(flappy.y + flappy.height > canvas.height)
    {
      gameOver()
    }

    if(requestId)
    {
      requestId = requestAnimationFrame(update)
    }
  }

  function generatePipes(){

    if(!(frames % 160 === 0)){
    return true
    }                                    //floor*max-min+min
    const height = Math.floor(Math.random()*(canvas.height*0.6))+60;
    const pipe1 = new pipe("top",canvas.width,0,height)
    const pipe2 = new pipe("eldeabajo",canvas.width,0,height+120,canvas.height - 120 - height)

    pipes.push(pipe1,pipe2)
    
    
  }

  function drawPipes(){

    pipes.forEach((pipe,index_pipe)=>{
      if(pipe.x <-30)
      {
        points ++
        pipe.splice(index_pipe,1)
      }
      pipe.draw()
      if(flappy.collision(pipe))
      {
        gameOver()
      }
      

    })
  }

  addEventListener("keydown",(e)=>{

    if(e.keyCode === 32)
    {
      flappy.userPull = 0.9
      
    }

  })

  addEventListener("keyup",(e)=>{

    if(e.keyCode === 32)
    {
      flappy.userPull = 0
      
    }

  })

};
