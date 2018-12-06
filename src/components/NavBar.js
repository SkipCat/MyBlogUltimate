import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../actions/user';

class NavBar extends Component {

  onSubmit = (e) => {
    e.preventDefault();
    this.props.logoutUser(this.state);
    this.props.history.push('/login');
  }

  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        { this.props.user.token ? (
          <Fragment>
            <Link to="/profile">{this.props.user.username}</Link>
            <button onClick={this.onSubmit}>Logout</button>
          </Fragment>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchProps = (dispatch) => ({
  logoutUser: (payload) => {
    dispatch(logoutUser(payload));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(NavBar));
