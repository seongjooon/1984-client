import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';

class App extends Component {
  render() {
    const { createUser, signinUser, signoutUser } = this.props;
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
            render={() => (
              <Signin signinUser={signinUser} signoutUser={signoutUser} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
