import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProfile, editProfile } from '../actions/user';

class EditProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      role: ''
    };

    if (!this.props.profile) {
      this.props.getProfile(
        window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
      );
    }
  }

  componentDidMount() {
    const { profile } = this.props;
    if (profile) {
      this.setState({
        username: profile.username,
        role: profile.role
      });
    }
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.editProfile({
      ...this.state,
      _id: this.props.profile._id,
      userId: this.props.user._id
    });
  }

  render() {
    const { user, editError } = this.props;

    return (
      <main>
        <h1>Edit profile</h1>
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
        { user.role === 'SUPERADMIN' && (
          <form>
            <label htmlFor="role">Role</label>
            <input
              type="type" name="role" required
              value={this.state.role}
              onChange={this.handleInputChange}
            />
            <button onClick={this.onSubmit}>CHANGE ROLE</button>
          </form>
        )}
        {editError && <p>{editError}</p>}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  editError: state.userReducer.editError,
  profile: state.userReducer.profile
});

const mapDispatchProps = (dispatch) => ({
  editProfile: (payload) => {
    dispatch(editProfile(payload))
  },
  getProfile: (payload) => {
    dispatch(getProfile(payload))
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(EditProfile));
