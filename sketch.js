var form;
var game;
var player;
var gameState = 0;
var playerCount = 0;
var database;

function setup(){
    database = firebase.database();

    createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    background("white");

    if (playerCount===4){
        game.update(1)
    }

    if (gameState===1){
       clear()
       game.play()
    }

}
