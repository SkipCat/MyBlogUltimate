import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getArticle } from '../actions/article';
import { postComment } from '../actions/comment';

class Article extends Component {

  constructor(props) {
    super(props);
    this.state = { comment: '' };
    this.props.getArticle(
      window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
    );
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.postComment({
      content: this.state.comment,
      author: this.props.user._id,
      article: this.props.article._id
    });
  }

  render() {
    const { article, user } = this.props;

    return (
      <main>
        { article ? (
          <Fragment>
            <h1>{article.title}</h1>
            <p>Published on {article.dateCreated} by {article.author}</p>
            { (article.dateUpdated !== article.dateCreated) &&
              <p>Updated on {article.dateUpdated}</p>
            }
            <p>{article.content}</p>
            { user.token && (
              <Fragment>
                <h2>Post a comment</h2>
                <form>
                  <textarea
                    name="comment" required
                    value={this.state.comment}
                    onChange={this.handleInputChange}
                  />
                  <button onClick={this.onSubmit}>POST</button>
                </form>
              </Fragment>
            )}
            { article.comments && article.comments.map(comment => (
              <div key={comment._id}>
                <p>{comment.author} on {comment.dateCreated}</p>
                <p>{comment.content}</p>
              </div>
            ))}
          </Fragment>
        ) : (
          <p>
            Either this article doesn't exist or there has been an internal error.
            Try refreshing the page.
          </p>
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  article: state.articleReducer.article,
  user: state.userReducer.user
    || {
      token: localStorage.getItem('token'),
      username: localStorage.getItem('username'),
      _id: localStorage.getItem('userId')
    }
    || undefined
});

const mapDispatchProps = (dispatch) => ({
  getArticle: (payload) => {
    dispatch(getArticle(payload))
  },
  postComment: (payload) => {
    dispatch(postComment(payload))
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(Article));
