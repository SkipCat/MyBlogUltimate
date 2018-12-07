import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import CreateArticle from './pages/CreateArticle';
import Article from './pages/Article';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
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
          <Route exact path="/article/create" component={withAuth(CreateArticle)}/>
          <Route path="/article/:id" component={Article}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile/edit" component={withAuth(EditProfile)}/>
          <Route path="/profile/:id" component={Profile}/>
          <Route path="" component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user
    || JSON.parse(localStorage.getItem('user')) || undefined
});

export default withRouter(connect(mapStateToProps, {})(App));
