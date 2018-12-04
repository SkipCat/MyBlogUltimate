import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';

import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="" component={NotFound}/>
        </Switch>
      </div>
    );
  }
}
