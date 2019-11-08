import { socket } from './App';
import { connectDeviceAction, startGameAction } from '../actions/index';

const configureSocket = dispatch => {
  socket.on('connecting message', hasAnotherDevice => {
    dispatch(connectDeviceAction(hasAnotherDevice));
  });

  socket.on('game start', isStart => {
    alert('lasdkfjlsajfl');
    dispatch(startGameAction(isStart));
  });

  socket.on('disconnect', () => {
    console.log('Connection fell or your browser is closing.');
  });
};

export const connectDevice = token => socket.emit('connect device', token);

export const startGame = isClicked => socket.emit('start game', isClicked);

export const leaveRoom = () => socket.emit('leave room');

export default configureSocket;
