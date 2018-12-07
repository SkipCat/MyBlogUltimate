import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { loginUser, clearLoginData } from '../actions/user';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      prevPath: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    // Avoid redirection from EditProfile to Login page
    // 1. get previous path
    if (nextProps.location !== this.props.location) {
      this.setState({ prevPath: this.props.location })
    }
  }

  // Avoid redirection from EditProfile to Login page
  // 2. go back to previous path
  componentDidMount() {
    if (this.props.user && this.props.user.token) {
      this.props.history.push(this.state.prevPath);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // if user logged in with success
    if (this.props.user && !this.props.user.error) {
      this.props.clearLoginData();
      this.props.history.push('/');
    }
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state
    this.props.loginUser({ username, password });
  }

  render() {
    return (
      <main>
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text" name="username" required
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password" name="password" required
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button onClick={this.onSubmit}>Login</button>
        </form>
        {this.props.loginError && <p>{this.props.loginError}</p>}
        <Link to="/register">Not registered yet?</Link>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  loginError: state.userReducer.loginError
});

const mapDispatchProps = (dispatch) => ({
  loginUser: (payload) => {
    dispatch(loginUser(payload));
  },
  clearLoginData: () => {
    dispatch(clearLoginData());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(Login));
