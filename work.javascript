<script>
window.addEventListener("keyup", ev => {
  if (ev.keyCode === 38) {
    //YOUR CODE HERE
    
    //example below
    document.body.innerHTML = "<h1 id='gameOn'>GAME ON!!!</h1>"
  }
});

function startGame() {
  myGamePiece = new component(30, 30, "red", 10, 120);
  myGamePiece.gravity = 0.05;
  myScore = new component("30px", "Consolas", "black", 280, 40, "text");
  myGameArea.start();
}

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
    window.addEventListener('keyleft', function (e) {
      myGameArea.keys = (myGameArea.keys || [up, down, left, right]);
      myGameArea.keys[e.keyCode] = true;
    })
    window.addEventListener('keyright', function (e) {
      myGameArea.keys[e.keyCode] = false;
    })
    window.addEventListener('touchstart', function (e) {
      myGameArea.x = e.pageX;
      myGameArea.y = e.pageY;
    })
    window.addEventListener('touchend', function (e) {
      myGameArea.x = false;
      myGameArea.y = false;
    })
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  stop : function() {
    clearInterval(this.interval);
  }
} 

var myGamePiece;
var obstacle;

function startGame() {
  myGamePiece = new component(30, 30, "red", 10, 120);
  myObstacle = new component(10, 200, "green", 300, 120); 
  myGameArea.start();
}

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.update = function(){
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.clicked = function() {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var clicked = true;
    if ((mybottom < myGameArea.y) || (mytop > myGameArea.y) || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
      clicked = false;
    }
    return clicked;
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  this.crashWith = function(otherobj) {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width);
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height);
    var crash = true;
    if ((mybottom < othertop) ||
    (mytop > otherbottom) ||
    (myright < otherleft) ||
    (myleft > otherright)) {
      crash = false;
    }
    return crash;
  }
}

function updateGameArea() {
  if (myGamePiece.crashWith(myObstacle)) {
    myGameArea.stop();
  }
  else {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -1; }
    if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = 1; }
    if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY = -1; }
    if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY = 1; }
    if (myGameArea.x && myGameArea.y) {
      if (myLeftBtn.clicked()) {
        myGamePiece.x += -1;
      }
      if (myRightBtn.clicked()) {
        myGamePiece.x += 1;
      }
    }
    myLeftBtn.update();
    myRightBtn.update(); 
    myLeftBtn = new component(30, 30, "blue", 20, 40);
    myRightBtn = new component(30, 30, "blue", 80, 40); 
    myObstacle.update();
    myGamePiece.newPos();
    myGamePiece.update();
  }
}

function moveup() {
  myGamePiece.speedY -= 1;
}

function movedown() {
  myGamePiece.speedY += 1;
}

function moveleft() {
  myGamePiece.speedX -= 1;
}

function moveright() {
  myGamePiece.speedX += 1;
}

function stopMove() {
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
}
</script>


<button onmousedown="moveup()" onmouseup="stopMove()" ontouchstart="moveup()">UP</button>
<button onmousedown="movedown()" onmouseup="stopMove()" ontouchstart="movedown()">DOWN</button>
<button onmousedown="moveleft()" onmouseup="stopMove()" ontouchstart="moveleft()">LEFT</button>
<button onmousedown="moveright()" onmouseup="stopMove()" ontouchstart="moveright()">RIGHT</button>
