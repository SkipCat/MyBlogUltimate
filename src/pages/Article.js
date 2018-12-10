import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { getArticle, deleteArticle } from '../actions/article';
import { postComment, deleteComment } from '../actions/comment';

import { dateToString } from '../utils/date';

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

  onSubmitComment = (e) => {
    e.preventDefault();
    this.props.postComment({
      content: this.state.comment,
      author: this.props.user._id,
      article: this.props.article._id
    });
  }

  onDeleteComment = (e, id) => {
    e.preventDefault();
    this.props.deleteComment({ id, userId: this.props.user._id });
  }

  onDeleteArticle = (e) => {
    e.preventDefault();
    const { article, user } = this.props;
    this.props.deleteArticle({ _id: article._id, userId: user._id });
    this.props.history.push('/');
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { article, user } = this.props;

    return (
      <main className="container">
        <button
          onClick={this.goBack}
          className="btn-flat action-btn light-blue-text text-darken-1 no-padding"
        >
          <i className="material-icons left">arrow_back</i>
          Go back
        </button>
        { article ? (
          <Fragment>
            <h1>{article.title}</h1>
            <p className="italic">
              Published on {dateToString(article.dateCreated)} by
              &nbsp;<Link to={`/profile/${article.author._id}`}>{article.author.username}</Link>
            </p>
            { (article.dateUpdated !== article.dateCreated) &&
              <p className="italic">Updated on {dateToString(article.dateUpdated)}</p>
            }
            <p className="text">{article.content}</p>
            { (user && user.token && user.role !== 'USER') &&
              <div className="row">
                <div className="right">
                  <Link to={`/article/edit/${article._id}`} className="btn-flat orange-text text-accent-2">
                    <i className="material-icons left">edit</i>
                    Edit article
                  </Link>
                  { (user && user.role === 'SUPERADMIN') && (
                    <button
                      onClick={this.onDeleteArticle} className="btn-flat pink-text text-darken-2">
                      <i className="material-icons left">delete_forever</i>
                      DELETE ARTICLE
                    </button>
                  )}
                </div>
              </div>
            }
            { (user && user.token) && (
              <div className="category">
                <h5>Post a comment</h5>
                <form>
                  <textarea
                    name="comment" required
                    value={this.state.comment}
                    onChange={this.handleInputChange}
                    className="materialize-textarea"
                  />
                  <div className="row">
                    <button onClick={this.onSubmitComment} className="right btn-small">
                      POST
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </form>
              </div>
            )}
            <div className="category">
              <h5>Comments</h5>
              { article.comments ? (
                article.comments.map(comment => (
                  <div className="card">
                    <div key={comment._id} className="card-content">
                      <p className="card-title">{comment.content}</p>
                      <p>{comment.author} on {dateToString(comment.dateCreated)}</p>
                    </div>
                    { (user && (comment.author === user._id || article.author === user._id
                      || user.role === 'SUPERADMIN')) && (
                      <div className="card-action">
                        <button
                          onClick={(e) => this.onDeleteComment(e, comment._id)}
                          className="btn-flat btn-small pink-text text-darken-2 transparent no-padding"
                        >
                          <i className="material-icons left">delete_forever</i>
                          DELETE
                        </button>
                      </div>
                    )}
                  </div>
                ))) : (
                  <p>No comment was posted yet.</p>
                )}
            </div>
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
    || JSON.parse(localStorage.getItem('user')) || undefined
});

const mapDispatchProps = (dispatch) => ({
  getArticle: (payload) => {
    dispatch(getArticle(payload))
  },
  postComment: (payload) => {
    dispatch(postComment(payload))
  },
  deleteComment: (payload) => {
    dispatch(deleteComment(payload))
  },
  deleteArticle: (payload) => {
    dispatch(deleteArticle(payload))
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(Article));
