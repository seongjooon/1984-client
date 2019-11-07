import { socket } from './App';
import { connectingDevice } from '../actions/index';

const configureSocket = dispatch => {
  socket.on('connecting message', hasAnotherDevice => {
    dispatch(connectingDevice(hasAnotherDevice));
  });

  socket.on('disconnect', () => {
    console.log('Connection fell or your browser is closing.');
  });
};

export const connectDevice = token => socket.emit('connect device', token);

export const leaveRoom = () => socket.emit('leave room');

export default configureSocket;
