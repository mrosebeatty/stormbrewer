const Phaser= require('phaser');
const Game= require ("../src/scenes/Game")

var config = {
  width: 800,
  height: 500,
  type: Phaser.AUTO,
};

var game = new Phaser.Game(config);

game.scene.add("game", Game);
game.scene.start("game");









// function preload() {
//   this.load.image("heat", "./assets/Heat.png");
//   this.load.image("ice", "../assets/Ice.png");
//   this.load.image("pot", "../assets/Pot.png");
//   this.load.image("water", "../assets/Water.png");
//   this.load.image("wind", "../assets/Wind.png");
//   this.load.image("city", "../assets/City.png");
// }

// function create() {
//   this.add.image(400, 300, "city").setOrigin(0, 0);
// }
// function update() {}

// game.scene.add('titlescreen', TitleScreen)

// game.scene.start('titlescreen')

// import TitleScreen from './scenes/TitleScreen'
