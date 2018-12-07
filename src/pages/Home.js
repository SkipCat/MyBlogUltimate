import React, { Component } from 'react';
import { withRouter , Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { getArticles } from '../actions/article';

class Home extends Component {

  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    return (
      <main>
        <h1>Home</h1>
        { !this.props.user.token
          ? <Link to="/login">Log in</Link>
          : <Link to="/article/create">Write an article</Link>
        }
        <ul>
          { this.props.articles && this.props.articles.map(article => (
            <li key={article._id}>
              <Link to={`article/${article._id}`}>
                <p>{article.title}</p>
              </Link>
              <p>{article.content}</p>
              <p>{article.author}</p>
              <p>{article.dateCreated}</p>
            </li>
          ))}
        </ul>
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
    || undefined,
  articles: state.articleReducer.articles
});

const mapDispatchProps = (dispatch) => ({
  getArticles: () => {
    dispatch(getArticles());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(Home));
