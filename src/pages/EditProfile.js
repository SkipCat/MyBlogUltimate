import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { editProfile } from '../actions/user';

class EditProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.username,
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.editProfile({ ...this.state, _id: this.props.user._id });
  }

  render() {
    const { editError } = this.props;

    return (
      <main>
        <h1>Edit your profile</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text" name="username" required
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <button onClick={this.onSubmit}>CHANGE USERNAME</button>
        </form>
        <form>
          <label htmlFor="password">Password</label>
          <input
            type="password" name="password" required
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button onClick={this.onSubmit}>CHANGE PASSWORD</button>
        </form>
        {editError && <p>{editError}</p>}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  editError: state.userReducer.editError
});

const mapDispatchProps = (dispatch) => ({
  editProfile: (payload) => {
    dispatch(editProfile(payload))
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(EditProfile));
