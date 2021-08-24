const parent = document.getElementById('game-holder');
// import Phaser from './Phaser'
// const Phaser = require('phaser')

var config = {
	type:Phaser.AUTO,
	width:800,
	height:600,
    parent: parent,
	physics: {
		default:'arcade',
		arcade: {
			gravity: {y : 0}
		}
	},
	scene: [matchScene]
};

var game = new Phaser.Game(config);
