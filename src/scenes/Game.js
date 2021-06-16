const Phaser = require("phaser");

class Game extends Phaser.Scene {
  preload() {
    this.load.image("wind", require("../../public/assets/Wind.png"));
    this.load.image(
      'city', require(("../../public/assets/City.png")) 
    );
    this.load.image('pot', require("../../public/assets/Pot.png"));
  }
  create() {
    this.add.image(300, 800, 'city');
    this.add.image(50, 440, 'pot');
    const text = this.add.text(400, 250, "hello world");
    text.setOrigin(0.5, 0.5);
    this.add.image(400, 250, "wind");
  }
}

module.exports = Game;
