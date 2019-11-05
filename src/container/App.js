import { connect } from 'react-redux';
import App from '../components/App';
import { createUserAPI, signinUserAPI, signoutUserAPI } from '../api/postApi';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  createUser: userData => {
    createUserAPI(userData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  },
  signinUser: userData => {
    signinUserAPI(userData)
      .then(res => {
        res.config = null;
        console.log(res);
        dispatch()
      })
      .catch(err => console.log(err));
  },
  signoutUser: () => {
    signoutUserAPI()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
