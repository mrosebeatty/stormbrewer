import Phaser from "phaser";
// import TitleScreen from './scenes/TitleScreen'
// import Game from './scenes/Game'

var config = {
  width: 800,
  height: 500,
  type: Phaser.AUTO,
  scene:{
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config)

function preload(){
  this.load.image('heat', './assets/Heat.png')
  this.load.image('ice', './assets/Ice.png')
  this.load.image('pot', './assets/Pot.png')
  this.load.image('water', './assets/Water.png')
  this.load.image('wind', './assets/Wind.png')
}

function create(){

}
function update(){

}

// game.scene.add('titlescreen', TitleScreen)
// game.scene.add('game', Game )

// // // game.scene.start('titlescreen')
// game.scene.start('game')