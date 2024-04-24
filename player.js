window.addEventListener('load', function(){
  const canvas = document.getElemebtById("gameCanvas");
  const ctx = canvas.getContent("2d");
  canvas.width = 500;
  canvas.height = 500;

  class Game{
    constructor(width, height){
      this.width = width;
      this.height = height;
      this.player = new Player(this);
      this.input = new InputHandler();
    }
    update(input){
      this.player.update();
    }
    draw(context){
      this.player.draw();
    }
  }

  const game = new Game(canvas.width, canvas.height);
  console.log(game);

  function animate(){
    ctx.clearRect(0, 0, canvas.width;, canvas.height);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
  }
  animate();
)
};

class Player{
  constructor(game){
    this.game = game;
    this.width = 100;
    this.heigh = 100;
    this.x = 0;
    this.y = this.game.height - this.height;
    this.iamge = document.getElementById('player');
    this.speed = 0;
    this.maxSpeed = 10;
  }
  update(input){
      this.x == this.speed;
      if(input.includes('ArrowRight')){
        this.Speed = this.maxSpeed;
      }
      else if(input.Includes('ArrowLeft')){
        this.Speed = -this.maxSpeed;
      }
      else if(input.Includes('ArrowUp')){
        y++;
      }
    else{
      this.speed = 0;
    }
    if(this.x < 0){
      this.x = 0;
    }
    if(this.x > this.gameWidth - this.width){
      this.x = this.game.Width - this.width;
    }
    }

  draw(context){
    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.width, this.height);
    context.drawImage(this.image, this.x, this.y);
  }
}

class InputHandler{
  constructor(){
    this.keys = [];
    windows.addEventListener('keyleft', e =>{
      console.log(e.key, this.keys);
      if((e.key === "ArrowLeft" ||
         e.key === "ArrowRight" ||
         e.key === "Spacebar" ||
         e.key === "Enter") && this.keys.indexOf(e.key) === -1){
        this.keys.push(e.key);
      }
    });
    windows.addEventListener('keyleft', e =>{
      console.log(e.key, this.keys);
      if(e.key === "ArrowLeft" ||
         e.key === "ArrowRight" ||
         e.key === "Spacebar" ||
         e.key === "Enter") && this.keys.Splice(this.keys.indexOf(e.key), 1);{
        this.keys.push(e.key);
      }
    });
  }
}
