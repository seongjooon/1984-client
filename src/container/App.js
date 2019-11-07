import { connect } from 'react-redux';
import App from '../components/App';
import { createUserAPI, signinUserAPI, signoutUserAPI } from '../Api/postApi';
import io from 'socket.io-client';
import { SERVER_URL } from '../constants/constant';
import configureSocket, { connectDevice } from './socket';
import { checkIsMobileDevice } from '../actions/index';

export const socket = io.connect(SERVER_URL);

const mapStateToProps = state => ({
  isMobileDevice: state.isMobileDevice,
  hasDevice: state.hasDevice
});

const mapDispatchToProps = dispatch => {
  configureSocket(dispatch);
  return {
    onLoad: isMobileDevice => {
      dispatch(checkIsMobileDevice(isMobileDevice));
    },
    createUser: userData => {
      createUserAPI(userData)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    },
    signinUser: userData => {
      signinUserAPI(userData)
        .then(res => {
          connectDevice(res.token);
        })
        .catch(err => console.log(err));
    },
    signoutUser: () => {
      signoutUserAPI()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
