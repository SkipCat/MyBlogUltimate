import React, { Component } from 'react';
import { withRouter , Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getArticles } from '../actions/article';

import { dateToString } from '../utils/date';

class Home extends Component {

  constructor(props) {
    super(props);
    this.props.getArticles();
  }

  render() {
    const { user, articles } = this.props;

    return (
      <main className="container">
        <h1>My Blog Ultimate</h1>
        { (!user || (user && !user.token)) && (
          <div className="row">
            <Link to="/login" className="right btn pink darken-2">Log in</Link>
          </div>
        )}
        { (user && user.token && user.role !== 'USER') && (
          <div className="row">
            { user.role === 'SUPERADMIN' && (
              <Link to="/admin" className="btn pink darken-2">
                Dashboard
              </Link>
            )}
            <Link to="/article/create" className="right btn orange accent-2">
              <i className="material-icons left">add</i>
              Write an article
            </Link>
          </div>
        )}
        <ul>
          { articles && articles.map(article => (
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
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user
    || JSON.parse(localStorage.getItem('user')) || undefined,
  articles: state.articleReducer.articles
});

const mapDispatchProps = (dispatch) => ({
  getArticles: () => {
    dispatch(getArticles());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(Home));
