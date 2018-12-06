import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export default function withAuth(ComponentToProtect) {

  class WithAuth extends Component {

    render() {
      if (!this.props.user.token) {
        return <Redirect to="/login" />;
      } else {
        return <ComponentToProtect {...this.props} />;
      }
    }
  }

  const mapStateToProps = (state) => ({
    user: state.userReducer.user
      || {
        token: localStorage.getItem('token'),
        username: localStorage.getItem('username'),
        _id: localStorage.getItem('userId')
      }
      || undefined
  });

  return withRouter(connect(mapStateToProps, {})(WithAuth));
}



