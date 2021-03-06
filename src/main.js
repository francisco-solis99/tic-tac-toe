import { TicTacToe } from './modules/TicTacToe';

const app = document.getElementById('app');
// create the structure and the html elements 🟩

const modeOfGame = 'single'; // single or multiplayer
// options => multiplayer, single
const ticTacToeGame = new TicTacToe({ mode: modeOfGame });
ticTacToeGame.renderGame(app);
