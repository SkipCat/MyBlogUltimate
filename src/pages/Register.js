import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerUser } from '../actions/user';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.isRegistered) {
      window.location.href = '/';
    }
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.registerUser(this.state);
  }

  render() {
    return (
      <main>
        <h1>Register</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text" name="username" required
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password" name="password" required
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <button onClick={e => this.onSubmit(e)}>REGISTER</button>
        </form>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  isRegistered: state.userReducer.isRegistered
});

const mapDispatchProps = (dispatch) => ({
  registerUser: (payload) => {
    dispatch(registerUser(payload));
  }
});

export default connect(mapStateToProps, mapDispatchProps)(Register);
