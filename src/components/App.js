import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signup from './Sign/Signup';
import Signin from './Sign/Signin';
import Game from './Game/Game';

class App extends Component {
  render() {
    const { createUser, signinUser, signoutUser, hasDevice } = this.props;
    return (
      <div className='App'>
        <header className='App-header'></header>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          <Route
            exact
            path='/signup'
            render={() => <Signup signupUser={createUser} />}
          />
          <Route
            exact
            path='/home'
            render={() =>
              hasDevice ? (
                <Game />
              ) : (
                <Signin signinUser={signinUser} signoutUser={signoutUser} />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
