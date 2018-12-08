import React, { Component } from 'react';
import { withRouter , Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { getArticles } from '../actions/article';

class Home extends Component {

  constructor(props) {
    super(props);
    this.props.getArticles();
  }

  render() {
    const { user, articles } = this.props;

    return (
      <main>
        <h1>Home</h1>
        {!user.token && <Link to="/login">Log in</Link>}
        {(user.token && user.role !== 'USER') &&  <Link to="/article/create">Write an article</Link>}
        <ul>
          { articles && articles.map(article => (
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
    || JSON.parse(localStorage.getItem('user')) || undefined,
  articles: state.articleReducer.articles
});

const mapDispatchProps = (dispatch) => ({
  getArticles: () => {
    dispatch(getArticles());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(Home));
