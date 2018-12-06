import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { registerUser, clearRegisterData } from '../actions/user';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.registerSuccess) {
      this.props.clearRegisterData();
      this.props.history.push('/login');
    }
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
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
            onChange={this.handleInputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password" name="password" required
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button onClick={this.onSubmit}>REGISTER</button>
        </form>
        {this.props.registerError && <p>{this.props.registerError}</p>}
        <Link to="/login">Already registered?</Link>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  registerSuccess: state.userReducer.registerSuccess,
  registerError: state.userReducer.registerError
});

const mapDispatchProps = (dispatch) => ({
  registerUser: (payload) => {
    dispatch(registerUser(payload));
  },
  clearRegisterData: () => {
    dispatch(clearRegisterData())
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(Register));
