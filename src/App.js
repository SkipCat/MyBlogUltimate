import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import CreateArticle from './pages/CreateArticle';
import Article from './pages/Article';
import EditArticle from './pages/EditArticle';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

import NavBar from './components/NavBar';
import withAuth from './components/withAuth';

import { logoutUser } from './actions/user';

class App extends Component {

  constructor(props) {
    super(props);

    const { user } = this.props;
    if (!user || (user && !user.token)) {
      this.props.logoutUser();
    }
  }

  render() {
    return (
      <div>
        <header>
          <NavBar user={this.props.user} />
        </header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/article/create" component={withAuth(CreateArticle)}/>
          <Route path="/article/edit/:id" component={withAuth(EditArticle)}/>
          <Route path="/article/:id" component={Article}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route path="/profile/edit/:id" component={withAuth(EditProfile)}/>
          <Route path="/profile/:id" component={Profile}/>
          <Route exact path="/admin" component={withAuth(Dashboard)}/>
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

const mapDispatchProps = (dispatch) => ({
  logoutUser: () => {
    dispatch(logoutUser())
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(App));
