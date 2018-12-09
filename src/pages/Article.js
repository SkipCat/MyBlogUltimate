import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { getArticle, deleteArticle } from '../actions/article';
import { postComment, deleteComment } from '../actions/comment';

class Article extends Component {

  constructor(props) {
    super(props);
    this.state = { comment: '' };

    if (!this.props.article) {
      this.props.getArticle(
        window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
      );
    }
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

  render() {
    const { article, user } = this.props;

    return (
      <main className="container">
        { article ? (
          <Fragment>
            <h1>{article.title}</h1>
            <p className="italic">Published on {article.dateCreated} by {article.author}</p>
            { (article.dateUpdated !== article.dateCreated) &&
              <p className="italic">Updated on {article.dateUpdated}</p>
            }
            <p className="text">{article.content}</p>
            { (user.token && user.role !== 'USER') &&
              <div className="row">
                <div className="right">
                  <Link to={`/article/edit/${article._id}`} className="btn orange accent-2">
                    <i className="material-icons left">edit</i>
                    Edit article
                  </Link>
                  { user.role === 'SUPERADMIN' && (
                    <button
                      onClick={this.onDeleteArticle} className="btn pink darken-2">
                      <i className="material-icons left">delete_forever</i>
                      DELETE ARTICLE
                    </button>
                  )}
                </div>
              </div>
            }
            { user.token && (
              <Fragment>
                <h5>Post a comment</h5>
                <form>
                  <textarea
                    name="comment" required
                    value={this.state.comment}
                    onChange={this.handleInputChange}
                  />
                  <div className="row">
                    <button onClick={this.onSubmitComment} className="right btn-small orange accent-2">
                      POST
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </form>
              </Fragment>
            )}
            <h5>Comments</h5>
            { article.comments ? (
              article.comments.map(comment => (
                <div className="card">
                  <div key={comment._id} className="card-content">
                    <p>{comment.author} on {comment.dateCreated}</p>
                    <p>{comment.content}</p>
                  </div>
                  <div className="card-action">
                    { (comment.author === user._id || article.author === user._id
                      || user.role === 'SUPERADMIN') && (
                      <button
                        onClick={(e) => this.onDeleteComment(e, comment._id)}
                        className="btn-flat btn-small pink-text text-darken-2 transparent no-padding"
                      >
                        <i className="material-icons left">delete_forever</i>
                        DELETE
                      </button>
                    )}
                  </div>
                </div>
              ))) : (
                <p>No comment was posted yet.</p>
              )}
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
