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

  function gameOver(){}

  function update(){

    frames ++
    //limpiar canvas
    ctx.clearRect(0,0,canvas.width,canvas.height)
    bg.draw()
    flappy.draw()

    if(requestId)
    {
      requestId = requestAnimationFrame(update)
    }
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
