import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
    preload(){
        this.load.image('City', './assets/City.png')
    }

    create(){
        this.add.image(400,250, 'City')
    }
}