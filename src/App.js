import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import NavBar from './components/NavBar';

import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </header>
      </div>
    );
  }
}
