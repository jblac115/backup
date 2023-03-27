// create a new scene
let gameScene = new Phaser.Scene('Game');

gameScene.init=function(){
  //player speed
  this.playerSpeed=3;

  //enemy speed
  this.enemyMinSpeed=2
  this.enemyMaxSpeed=4.5  

  //set enemy boundaries
  this.minY = 80
  this.maxY= 280
}

gameScene.preload=function(){
  //load assets
  this.load.image('background','assets/background.png')
  this.load.image('player','assets/player.png')
  this.load.image('enemy','assets/dragon.png')
  this.load.image('goal','assets/treasure.png')
}
gameScene.create=function(){
  //create our background sprite
  let bg=this.add.sprite(0,0,'background')
  bg.setPosition(640/2,360/2)
  this.goal=this.add.sprite(0,0,'goal')
  this.goal.setPosition(570,360/2)
  this.goal.setScale(0.6);
  this.player=this.add.sprite(0,0,'player')
  this.enemy=this.add.sprite(0,0,'enemy')
  this.player.setPosition(40,360/2);
  this.enemy.setPosition(640/2,360/2)
  this.enemy2=this.add.sprite(0,0,'enemy');
  this.enemy2.setPosition(400,360/2)
  //how to flip
  this.enemy.flipX=true
  this.enemy2.flipY=true
  //how to scale
  this.player.scaleX=.6
  this.player.scaleY=.6

  this.enemy.setScale(.8)
  //this.enemy2.setScale(2)

  //set enemy speed
  let dir = Math.random()<0.5 ? 1 : -1;
  let speed= this.enemyMinSpeed + Math.random() * (this.enemyMaxSpeed-this.enemyMinSpeed)
  this.enemy.speed=dir*speed

  
}
gameScene.update=function(){
  //give enemy a speed
  this.enemy.y+=this.enemy.speed

  let conUp=this.enemy.speed<0 && this.enemy.y <= this.minY
  let conDown=this.enemy.speed>0 && this.enemy.y>=this.maxY

  if(conUp||conDown){
    this.enemy.speed*=-1
  }
  //how to rotate
  this.enemy.angle+=4
  if(this.enemy2.scaleX<2){
    this.enemy2.scaleX+=.01;
    this.enemy2.scaleY+=.01;
  }
  if(this.input.activePointer.isDown&&this.player.x<585){
    this.player.x+=this.playerSpeed
    //this.player.angle+=5
  }
  let playerRect=this.player.getBounds();
  let goalRect=this.goal.getBounds();
  if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect,goalRect)){
    console.log('reached goal')
    //restart our scene
    this.scene.restart();
    //leave the method
    return;
  }

}
// set the configuration of the game
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not it will use Canvas
  width: 640,
  height: 360,
  scene: gameScene
};

// create a new game, pass the configuration
let game = new Phaser.Game(config);