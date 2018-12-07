import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getArticle } from '../actions/article';

class Article extends Component {

  constructor(props) {
    super(props);
    this.props.getArticle(
      window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
    );
  }

  render() {
    const { article } = this.props;

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
  article: state.articleReducer.article
});

const mapDispatchProps = (dispatch) => ({
  getArticle: (id) => {
    dispatch(getArticle(id));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(Article));
