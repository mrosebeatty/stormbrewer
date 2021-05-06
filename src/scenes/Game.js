const Phaser = require("phaser");

class Game extends Phaser.Scene {
  preload() {
    this.load.image("wind", "../assets/Wind.png");
  }
  create() {
    const text = this.add.text(400, 250, "hello world");
    text.setOrigin(0.5, 0.5);
    this.add.image(400, 250, "wind");
  }
}

module.exports = Game;
