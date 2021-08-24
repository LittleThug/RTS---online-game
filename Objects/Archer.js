class Archer extends Phaser.GameObjects.Sprite {
	constructor(){
		super({key:"matchScene"});
        this.position = [0,0];
        this.hp = 10;
        this.moveDistance = 3;
	}

	
}