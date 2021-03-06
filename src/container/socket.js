import { socket } from './App';
import {
  connectDeviceAction,
  startGameAction,
  moveAirplaneAction,
  stopGameAction,
  openRankingAction
} from '../actions/index';

export const connectDevice = token => socket.emit('connect device', token);

export const startGame = isClicked => socket.emit('start game', isClicked);

export const moveAirplane = direction =>
  socket.emit('move airplane', direction);

export const stopGame = () => socket.emit('game over');

export const openRanking = () => socket.emit('open ranking');

export const restartGame = () => socket.emit('restart game');

const configureSocket = dispatch => {
  socket.on('connecting message', hasAnotherDevice => {
    dispatch(connectDeviceAction(hasAnotherDevice));
  });

  socket.on('game start', isClicked => {
    dispatch(startGameAction(isClicked));
  });

  socket.on('airplane moving', direction => {
    dispatch(moveAirplaneAction(direction));
  });

  socket.on('game stop', () => {
    dispatch(stopGameAction());
  });

  socket.on('ranking open', () => {
    dispatch(openRankingAction());
  });

  socket.on('game restart', () => {
    window.location.reload();
  });

  socket.on('disconnect', () => {
    console.log('Connection fell or your browser is closing.');
  });
};

export default configureSocket;
