import React, { Component } from 'react';
import { withRouter , Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    return (
      <main>
        <h1>Home</h1>
        { !this.props.user.token
          ? <Link to="/login">Log in</Link>
          : <Link to="/article/create">Write an article</Link>
        }
      </main>
    );
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

export default withRouter(connect(mapStateToProps, {})(Home));
