import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../actions/user';

const buttonStyle = {
  background: 'none',
  border: 'none',
  color: 'white'
};

class NavBar extends Component {

  onSubmit = (e) => {
    e.preventDefault();
    this.props.logoutUser(this.state);
    this.props.history.push('/login');
  }

  render() {
    const { user } = this.props;

    return (
      <nav className="row col m12 pink darken-2">
        <div className="col m7">
          <Link to="/" className="col s3">MyBlogUltimate</Link>
          { (user && user.token && user.role === 'SUPERADMIN') &&
            <Link to="/admin" className="col m2 hide-on-med-and-down">Dashboard</Link>
          }
        </div>
        { user && user.token ? (
          <div className="col m5 valign-wrapper">
            <Link to={`/profile/${user._id}`} className="col m2">
              {user.username}
            </Link>
            <button
              onClick={this.onSubmit}
              className="col m3 right hide-on-med-and-down"
              style={buttonStyle}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="col s6 offset-s6">Login</Link>
        )}
      </nav>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchProps = (dispatch) => ({
  logoutUser: () => {
    dispatch(logoutUser());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(NavBar));
