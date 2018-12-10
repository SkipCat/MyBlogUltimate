import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProfile, logoutUser } from '../actions/user';

import { dateToString } from '../utils/date';

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
            <div className="category">
              <h5>Number of written article(s): {profile.articles.length}.</h5>
              <ul>
                { profile.articles && profile.articles.map(article => (
                  <li key={article._id} className="card">
                    <div className="card-content">
                      <p className="card-title">{article.title}</p>
                      { article.author
                        ? <p>{article.author.username}</p>
                        : <i>deleted</i>
                      }
                      <p>{dateToString(article.dateCreated)}</p>
                    </div>
                    <div className="card-action">
                      <Link to={`article/${article._id}`}>SEE ARTICLE</Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="category">
              <h5>Number of written comment(s): {profile.comments.length}.</h5>
              <ul>
                { profile.comments && profile.comments.map(comment => (
                  <li key={comment._id} className="card">
                    <div key={comment._id} className="card-content">
                      <p className="card-title">{comment.content}</p>
                      <p>{comment.author} on {dateToString(comment.dateCreated)}</p>
                      <p>
                        from article
                        &nbsp;<Link to={`/article/${comment.article._id}`}>{comment.article.title}</Link>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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
