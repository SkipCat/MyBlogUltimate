import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProfile } from '../actions/user';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.props.getProfile(
      window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
    );
  }

  render() {
    const { profile, user } = this.props;
    
    return (
      <main>
        { profile ? (
          <Fragment>
            <p>{profile.username}</p>
            <ul>
              { profile.articles ? (
                <Fragment>
                  <p>Number of written article(s): {profile.articles.length}.</p>
                  { profile.articles.map(article => (
                    <li key={article._id}>
                      <Link to={`/article/${article._id}`}>
                        <p>{article.title}</p>
                      </Link>
                      <p>the {article.dateCreated}</p>
                    </li>
                  ))}
                </Fragment>
              ) : (
                <p>No written article yet :(</p>
              )}
            </ul>
            <ul>
              { profile.comments ? (
                <Fragment>
                  <p>Number of written comment(s): {profile.comments.length}.</p>
                  { profile.comments.map(comment => (
                    <li key={comment._id}>
                      <p>{comment.content}</p>
                      <p>
                        the
                        <Link to={`/article/${comment.article}`}>{comment.article}</Link>
                      </p>
                    </li>
                  ))}
                </Fragment>
              ) : (
                <p>No written comment yet :(</p>
              )}
            </ul>
            { (profile._id === user._id || user.role === 'SUPERADMIN') && (
              <Link to={`/profile/edit/${profile._id}`}>Edit profile</Link>
            )}
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
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(Profile));
