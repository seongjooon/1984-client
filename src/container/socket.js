import { socket } from './App';
import {
  connectDeviceAction,
  startGameAction,
  moveAirplaneAction
} from '../actions/index';

export const connectDevice = token => socket.emit('connect device', token);

export const startGame = isClicked => socket.emit('start game', isClicked);

export const moveAirplane = direction =>
  socket.emit('move airplane', direction);

const configureSocket = dispatch => {
  socket.on('connecting message', hasAnotherDevice => {
    dispatch(connectDeviceAction(hasAnotherDevice));
  });

  socket.on('game start', isStart => {
    dispatch(startGameAction(isStart));
  });

  socket.on('airplane moving', direction => {
    dispatch(moveAirplaneAction(direction));
  });

  socket.on('disconnect', () => {
    console.log('Connection fell or your browser is closing.');
  });
};

export default configureSocket;
