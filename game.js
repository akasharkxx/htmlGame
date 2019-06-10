var canvasBg = document.getElementById("canvasBg"),
    ctxBg = canvasBg.getContext("2d"),
    canvasEntities = document.getElementById("canvasEntities"),
    ctxEntities = canvasEntities.getContext("2d"),
    canvasWidth = canvasBg.width,
    canvasHeight = canvasBg.height,
    player1 = new Player(),
    //enemies = [],
    //numEnemies = 5,
    //obstacles = [],
    isPlaying = false,
    requestAnimFrame = window.requestAnimationFrame ||
                       window.webkitRequestAnimationFrame ||
                       window.mozRequestAnimationFrame ||
                       window.oRequestAnimationFrame ||
                       window.msRequestAnimationFrame ||
                       function(callback) {
                           window.setTimeout(callback, 1000/60);
                       },
    imgSprite = new Image();
imgSprite.src = "images/sprite.png";
imgSprite.addEventListener("load", init, false);

function init(){
    document.addEventListener("keydown",function(e) {checkKey(e, true);}, false);
    document.addEventListener("keyup", function(e) {checkKey(e, true);}, false);
    // defineObstacles();
    // initEnemies();
    begin();
}

function begin(){
    ctxBg.drawImage(imgSprite, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
    isPlaying = true;
    requestAnimFrame(loop);
}

function update() {
    clearCtx(ctxEntities);
    // updateAllEnemies();
    player1.update();
}

function draw() {
    // drawAllEnemies();
    player1.draw();
}
function loop(){
    if(isPlaying){
        //console.log("looping");
        update();
        draw();
        requestAnimFrame(loop);
    }
}

function clearCtx(ctx){
    ctxEntities.clearRect(0, 0, canvasWidth, canvasHeight);
}

function randomRange(min, max){
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function Player() {
    this.srcX = 0;
    this.srcY = 600;
    this.width = 35;
    this.height = 54;
    this.drawX = 400;
    this.drawY = 300;
    this.centerX = this.drawX + (this.width / 2);
    this.centerY = this.drawY + (this.height / 2);
    this.speed = 2;
    this.isUpKey = false;
    this.isDownKey = false;
    this.isRightKey = false;
    this.isLeftKey = false;
    this.isSpacebar = false;
    // this.isShooting = false;
    // var numBullets = 10;
    // this.bullets = [];
    // this.currentBullet = 0;
    // for(var i = 0, i < numBullets; i++){
        // this.bullets[this.bullets.length] = new Bullet();
    // }
};

Player.prototype.update = function (){
    this.centerX = this.drawX + (this.width / 2);
    this.centerY = this.drawY + (this.height / 2);
    //this.checkDirection();
    //this.checkShooting();
    // this.updateAllBullets();
};

Player.prototype.draw = function(){
    // this.drawAllBullets();
    ctxEntities.drawImage(imgSprite, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
};


fucntion checkKey(e, value) {
    var keyID = e.keyCode || e.which;
    if (keyID === 38) { //Up arrow
        player1.isUpkey = value;
        e.preventDefault(); //prevents form scrolling the page
    }
    if (keyID === 39) { //Right arrow
        player1.isRightkey = value;
        e.preventDefault(); //prevents form scrolling the page
    }
    if (keyID === 40) { //Down arrow
        player1.isDownkey = value;
        e.preventDefault(); //prevents form scrolling the page
    } 
    if (keyID === 37) { //Left arrow
        player1.isLeftkey = value;
        e.preventDefault(); //prevents form scrolling the page
    }
    if (keyID === 32) { //Spacebar
        player1.isSpacebar = value;
        e.preventDefault(); //prevents form scrolling the page
    }

}