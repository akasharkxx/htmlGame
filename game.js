var canvasBg = document.getElementById("canvasBg"),
    ctxBg = canvasBg.getContext("2d"),
    canvasEntities = document.getElementById("canvasEntities"),
    ctxEntities = canvasEntities.getContext("2d"),
    canvasWidth = canvasBg.width,
    canvasHeight = canvasBg.height,
    //player = new Player(),
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
    // document.addEventListener("keydown", checkKeyDown, false);
    // document.addEventListener("keyup", checkKeyUp, false);
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
    // player1.update();
}

function draw() {
    // drawAllEnemies();
    // player1.draw();
}
function loop(){
    if(isPlaying){
        console.log("looping");
        update();
        draw();
        requestAnimFrame(loop);
    }
}

function clearCtx(ctx){
    ctxBg.clearRect(0, 0, canvasWidth, canvasHeight);
}

function randomRange(min, max){
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}