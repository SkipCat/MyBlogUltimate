import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getArticles, deleteArticle } from '../actions/article';
import { getUsers, deleteUser } from '../actions/user';
import { getComments, deleteComment } from '../actions/comment';

import { dateToString } from '../utils/date';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    if (!this.props.articles) {
      this.props.getArticles();
    }
    if (!this.props.users) {
      this.props.getUsers();
    }
    if (!this.props.comments) {
      this.props.getComments();
    }
  }

  onDeleteArticle = (e, id) => {
    e.preventDefault();
    this.props.deleteArticle({ _id: id, userId: this.props.user._id });
  }

  onDeleteUser = (e, id) => {
    e.preventDefault();
    this.props.deleteUser({ _id: id, userId: this.props.user._id });
  }

  onDeleteComment = (e, id) => {
    e.preventDefault();
    this.props.deleteComment({ id, userId: this.props.user._id });
  }

  goBack = () => {
    this.props.history.push('/');
  }

  render() {
    const { articles, users, comments } = this.props;

    return (
      <main className="container">
        <button
            onClick={this.goBack}
            className="btn-flat action-btn light-blue-text text-darken-1 no-padding"
          >
          <i className="material-icons left">arrow_back</i>
          Go back to home
        </button>
        <h1>Dashboard</h1>
        <div className="row">
          <a href="#users" className="btn-flat light-blue-text text-darken-1">Users</a>
          <a href="#articles" className="btn-flat light-blue-text text-darken-1">Articles</a>
          <a href="#comments" className="btn-flat light-blue-text text-darken-1">Comments</a>
        </div>
        <div id="users" className="category">
          <h5>All users</h5>
          { users && (
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Username</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              { users.map(user => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>
                    <Link
                      to={`/profile/${user._id}`}
                      className="btn-flat light-blue-text text-darken-1 action-btn"
                    >
                      See in detail
                    </Link>
                    <Link 
                      to={`/profile/edit/${user._id}`}
                      className="btn-flat orange-text text-accent-2 action-btn"
                    >
                      Edit
                    </Link>
                    <button 
                      onClick={(e) => this.onDeleteUser(e, user._id)}
                      className="btn-flat pink-text text-darken-2 action-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          )}
        </div>
        <div id="articles" className="category">
          <h5>All articles</h5>
          <div className="row">
            <Link to="/article/create" className="right btn orange accent-2">
              <i className="material-icons left">add</i>
              Write an article
            </Link>
          </div>
          { articles && (
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Date created</th>
                  <th>Last update</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              { articles.map(article => (
                <tr key={article._id}>
                  <td>{article._id}</td>
                  <td>{article.title}</td>
                  <td>
                    { article.author === null 
                      ? <i>deleted</i>
                      : <Link to={`/profile/${article.author._id}`}>{article.author.username}</Link>
                    }
                  </td>
                  <td>{dateToString(article.dateCreated)}</td>
                  <td>{dateToString(article.dateUpdated)}</td>
                  <td>
                    <Link
                      to={`/article/${article._id}`}
                      className="btn-flat light-blue-text text-darken-1 action-btn"
                    >
                      See in detail
                    </Link>
                    <Link 
                      to={`/article/edit/${article._id}`}
                      className="btn-flat orange-text text-accent-2 action-btn"
                    >
                      Edit
                    </Link>
                    <button 
                      onClick={(e) => this.onDeleteArticle(e, article._id)}
                      className="btn-flat pink-text text-darken-2 action-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          )}
        </div>
        <div id="comments" className="category">
          <h5>All comments</h5>
          { comments && (
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Content</th>
                  <th>Author</th>
                  <th>From article</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              { comments.map(comment => (
                <tr key={comment._id}>
                  <td>{comment._id}</td>
                  <td>{comment.content}</td>
                  <td>
                    { comment.author === null
                      ? <i>deleted</i>
                      : <Link to={`/profile/${comment.author._id}`}>{comment.author.username}</Link>
                    }
                  </td>
                  <td>
                    <Link to={`/article/${comment.article}`}>
                      {comment.article}
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={(e) => this.onDeleteComment(e, comment._id)}
                      className="btn-flat pink-text text-darken-2 action-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articleReducer.articles,
  users: state.userReducer.users,
  comments: state.commentReducer.comments
});

const mapDispatchProps = (dispatch) => ({
  getArticles: () => {
    dispatch(getArticles());
  },
  deleteArticle: (payload) => {
    dispatch(deleteArticle(payload))
  },
  getUsers: () => {
    dispatch(getUsers());
  },
  deleteUser: (payload) => {
    dispatch(deleteUser(payload));
  },
  getComments: () => {
    dispatch(getComments());
  },
  deleteComment: (payload) => {
    dispatch(deleteComment(payload));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(Dashboard));
