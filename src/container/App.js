import { connect } from 'react-redux';
import App from '../components/App';
import { createUserAPI, signinUserAPI, signoutUserAPI } from '../Api/postApi';
import io from 'socket.io-client';
import { SERVER_URL } from '../constants/constant';
import configureSocket, {
  connectDevice,
  startGame,
  moveAirplane,
  stopGame,
  openRanking,
  restartGame
} from './socket';
import {
  checkIsMobileDevice,
  checkIsBlockMobile,
  moveObstacleAction
} from '../actions/index';

export const socket = io.connect(SERVER_URL, { transports: ['websocket'] });

const mapStateToProps = state => ({
  isMobileDevice: state.isMobileDevice,
  isBlockMobile: state.isBlockMobile,
  hasAnotherDevice: state.hasAnotherDevice,
  isGameStarted: state.isGameStarted,
  airplane: state.airplane,
  obstacles: state.obstacles,
  isGameOver: state.isGameOver,
  isRankingOpened: state.isRankingOpened
});

const mapDispatchToProps = dispatch => {
  configureSocket(dispatch);
  return {
    onLoad: isMobileDevice => {
      dispatch(checkIsMobileDevice(isMobileDevice));
    },
    blockMobileScreen: isBlock => {
      dispatch(checkIsBlockMobile(isBlock));
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
    },
    clickStartButton: isClicked => {
      startGame(isClicked);
    },
    clickDirectionButton: direction => {
      moveAirplane(direction);
    },
    changeObstaclePosition: () => {
      dispatch(moveObstacleAction());
    },
    gameOver: () => {
      stopGame();
    },
    openRankingPage: () => {
      openRanking();
    },
    clickRestartButton: () => {
      restartGame();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
