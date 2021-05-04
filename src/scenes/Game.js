import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
    preload(){

    }

    create(){
        this.add.image(400,250, 'City')
    }
}