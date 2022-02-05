
//var ship1;
//var ship2;
function preload(){

    //ship1 = loadImage("ship.png");
    //ship2 = loadImage("ship2.png")
    shipping = loadAnimation("ship.png","ship2.png","ship.png");

}

function setup(){
    createCanvas(800,800);
    object = createSprite(400,200,10,10);
    object.addAnimation("Shipping",shipping);
    object.scale = 0.4;
    
}

function draw(){
    background("lightblue");
    drawSprites();
}
