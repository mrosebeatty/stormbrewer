import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
    preload(){
        this.load.image('wind', 'assets/Wind.png')
    }

    create(){
        this.add.image(400,250,'wind')
    }
}