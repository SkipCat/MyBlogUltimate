import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Secret from './pages/Secret';
import NotFound from './pages/NotFound';

import NavBar from './components/NavBar';
import withAuth from './components/withAuth';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar user={this.props.user} />
        </header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/secret" component={withAuth(Secret)}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="" component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user
    || {
      token: localStorage.getItem('token'),
      username: localStorage.getItem('username'),
      _id: localStorage.getItem('userId')
    }
    || undefined
});

export default withRouter(connect(mapStateToProps, {})(App));
