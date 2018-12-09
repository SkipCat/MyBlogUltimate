import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getArticles, deleteArticle } from '../actions/article';
import { getUsers, deleteUser } from '../actions/user';
import { getComments, deleteComment } from '../actions/comment';

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

  render() {
    const { articles, users, comments } = this.props;

    return (
      <main>
        <h1>Dashboard</h1>
        {/* <Link to="/admin/users">See all users</Link>
        <Link to="/admin/articles">See all articles</Link>
        <Link to="/admin/comments">See all comments</Link> */}
        <h3>All articles</h3>
        <Link to="/article/create">Write an article</Link>
        { articles ? (
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
                <td>{article.author}</td>
                <td>{article.dateCreated}</td>
                <td>{article.dateUpdated}</td>
                <td>
                  <Link to={`/article/${article._id}`}>See in detail</Link>
                  <Link to={`/article/edit/${article._id}`}>Edit</Link>
                  <button onClick={(e) => this.onDeleteArticle(e, article._id)}>Delete</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        ) : (
          <p>No article was published yet :(</p>
        )}
        <hr/>
        <h3>All users</h3>
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
                  <Link to={`/profile/${user._id}`}>See in detail</Link>
                  <Link to={`/profile/edit/${user._id}`}>Edit</Link>
                  <button onClick={(e) => this.onDeleteUser(e, user._id)}>Delete</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        )}
        <hr/>
        <h3>All comments</h3>
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
                <td>{comment.author}</td>
                <td>{comment.article}</td>
                <td>
                  <button onClick={(e) => this.onDeleteComment(e, comment._id)}>Delete</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        )}
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
