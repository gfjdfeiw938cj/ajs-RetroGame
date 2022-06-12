/**
 * Entry point of app: don't change this
 */
import GamePlay from './GamePlay';
import GameController from './GameController';
import GameStateService from './GameStateService';

const gamePlay = new GamePlay();
gamePlay.bindToDOM(document.querySelector('#game-container'));
gamePlay.bindPopup(document.querySelector('#popup'));

const stateService = new GameStateService(localStorage);

const gameCtrl = new GameController(gamePlay, stateService); // В качесве аргумента два класса 
gameCtrl.init();
