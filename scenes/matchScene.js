class matchScene extends Phaser.Scene {
	constructor(){
		super({key:"matchScene"});
	}

	preload() {
        this.load.tilemapTiledJSON('tilemap', 'maps/MatchScene.json');
        this.load.image('defaultTiles', 'maps/free.png');
	}

	create() {
        this.map = this.make.tilemap({key: 'tilemap'});
        
	    const tileset = this.map.addTilesetImage('default', 'defaultTiles')
		var background = this.map.createStaticLayer('Tile Layer 1', tileset).setScale(2);;


        for(let i=0; i<18; i++){
            let y = i*32;
            for(let j=0; j<18; j++){
                let x = j*32;
                var rect = this.add.rectangle(x, y, 32, 32).setOrigin(0);
                rect.setStrokeStyle(1, 0x1a65ac);
            }
        }

        //archers
        this.archer = new Archer;
    }

	update(delta){

	}
}