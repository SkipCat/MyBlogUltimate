import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProfile, logoutUser } from '../actions/user';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.props.getProfile(
      window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
    );
  }

  logout = (e) => {
    e.preventDefault();
    this.props.logoutUser(this.state);
    this.props.history.push('/login');
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { profile, user } = this.props;
    
    return (
      <main className="container">
        <button
          onClick={this.goBack}
          className="btn-flat action-btn light-blue-text text-darken-1 no-padding"
        >
          <i className="material-icons left">arrow_back</i>
          Go back
        </button>
        { profile ? (
          <Fragment>
            <h1>{profile.username}</h1>
            <h5>Number of written article(s): {profile.articles.length}.</h5>
            <ul>
              { profile.articles && profile.articles.map(article => (
                <li key={article._id}>
                  <Link to={`/article/${article._id}`}>
                    <p>{article.title}</p>
                  </Link>
                  <p>the {article.dateCreated}</p>
                </li>
              ))}
            </ul>
            <h5>Number of written comment(s): {profile.comments.length}.</h5>
            <ul>
              { profile.comments && profile.comments.map(comment => (
                <li key={comment._id}>
                  <p>{comment.content}</p>
                  <p>
                    the
                    <Link to={`/article/${comment.article}`}>{comment.article}</Link>
                  </p>
                </li>
              ))}
            </ul>
            { (profile._id === user._id || user.role === 'SUPERADMIN') && (
              <div className="row">
                <Link to={`/profile/edit/${profile._id}`} className="right btn orange accent-2">
                  <i className="material-icons left">edit</i>
                  Edit profile
                </Link>
              </div>
            )}
            <div className="row">
              <button
                onClick={this.logout}
                className="btn-flat pink-text text-darken-2"
              >
                Logout
              </button>
            </div>
          </Fragment>
        ) : (
          <p>
            Either this user doesn't exist or there has been an internal error.
            Try refreshing the page.
          </p>
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.userReducer.profile,
  user: state.userReducer.user
    || JSON.parse(localStorage.getItem('user')) || undefined
});

const mapDispatchProps = (dispatch) => ({
  getProfile: (payload) => {
    dispatch(getProfile(payload))
  },
  logoutUser: () => {
    dispatch(logoutUser())
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(Profile));
