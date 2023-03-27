// create a new scene
let gameScene = new Phaser.Scene('Game');
gameScene.init = function() {
  // player speed
  this.playerSpeed = 3;

  // enemy speed
  this.enemyMinSpeed = 2;
  this.enemyMaxSpeed = 4.5;
};
//load our assets
gameScene.preload =function(){
  //load our assets
  this.load.image('background','assets/background.png');
  this.load.image('player','assets/player.png');
  this.load.image('enemy','assets/dragon.png')
  this.load.image('goal','assets/treasure.png');
}
gameScene.create=function(){
  let bg=this.add.sprite(0,0,'background');
  //set position
  bg.setPosition(640/2,360/2);
  this.player=this.add.sprite(0,0,'player');
  this.player.setPosition(20,360/2);
  //this.enemy=this.add.sprite(0,0,'enemy');
  //this.enemy.setPosition(640/2,360/2);
  //this.enemy.flipX=true;
  this.player.scaleX=.6;
  this.player.scaleY=.6;
  //this.enemy2=this.add.sprite(0,0,'enemy');
  //this.enemy2.setPosition(500,360/2);
  //this.enemy2.flipY=true;
  //this.enemy.setScale(.4);
  //this.enemy2.setScale(.5);
  this.goal=this.add.sprite(0,0,'goal');
  this.goal.setPosition(550,360/2);
  this.goal.setScale(0.6);
  this.enemies=this.add.group({
    key:'enemy',
    repeat:4,
    setXY:{
      x: 90,
      y: 100,
      stepX:90,
      stepY: 20
    }
  })
  //this is how to scale the group
  Phaser.Actions.ScaleXY(this.enemies.getChildren(),-0.5,-0.5)
  Phaser.Actions.Call(this.enemies.getChildren(),function(enemy){
    enemy.flipX=true;
        // set speed
        let dir = Math.random() < 0.5 ? 1 : -1;
        let speed = this.enemyMinSpeed + Math.random() * (this.enemyMaxSpeed - this.enemyMinSpeed);
        enemy.speed = dir * speed;
    
      }, this);
      
}
//this call function happens 60 times a second 60fps
gameScene.update=function(){
  // this.enemy.angle+=1
  // if(this.enemy.scaleX<2){
  //   this.enemy.scaleX+=.01;
  //   this.enemy.scaleY+=.01
  // }
  if(this.input.activePointer.isDown && this.player.x<=580){
    this.player.x+=this.playerSpeed
  }
  let playerRect=this.player.getBounds();
  let goalRect=this.goal.getBounds();
  if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect,goalRect)){
    console.log('reached the goal')
    this.scene.restart()
  }
  //get enemies
  let enemies= this.enemies.getChildren();
  let numEnemies=enemies.length;
  for(let i = 0; i< numEnemies; i++) {
    // enemy movement
    enemies[i].y += enemies[i].speed;
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
