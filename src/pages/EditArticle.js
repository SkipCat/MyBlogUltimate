import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getArticle, editArticle } from '../actions/article';

class EditArticle extends Component {

  constructor(props) {
    super(props);
    this.state = { title: '', content: '' };

    // Avoid loop call
    if (!this.props.article && this.props.user.role !== 'USER') {
      this.props.getArticle(
        window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
      );
    }
  }

  componentDidMount() {
    // Display values inside correspondant inputs
    if (this.props.article) {
      const { title, content } = this.props.article;
      this.setState({ title, content })
    }
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { article, user } = this.props;
    
    this.props.editArticle({
      ...this.state,
      dateUpdated: new Date(),
      _id: article._id,
      userId: user._id
    });
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <main className="container">
        <button
          onClick={this.goBack}
          className="btn-flat action-btn light-blue-text text-darken-1 no-padding"
        >
          <i className="material-icons left">arrow_back</i>
          Go back
        </button>
        { this.props.user.role === 'USER' ? (
          <Fragment>
            <h1>403 Forbidden</h1>
            <p>You do not have permission to access this page.</p>
          </Fragment>
        ) : (
          <Fragment>
            <h1>Edit the article</h1>
            <form>
              <div className="input-field">
                <input
                  type="text" name="title" required autofocus
                  value={this.state.title}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="title" className="active">Title</label>
              </div>
              <div className="input-field">
                <textarea
                  name="content" required
                  value={this.state.content}
                  onChange={this.handleInputChange}
                  className="materialize-textarea"
                />
                <label htmlFor="content" className="active">Content</label>
              </div>
              <div className="row">
                <button onClick={this.onSubmit} className="right btn">
                  <i className="material-icons left">check</i>
                  SAVE CHANGES
                </button>
              </div>
            </form>
            {this.props.articleData && <p>{this.props.articleData}</p>}
          </Fragment>
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  article: state.articleReducer.article,
  articleData: state.articleReducer.data
});

const mapDispatchProps = (dispatch) => ({
  getArticle: (payload) => {
    dispatch(getArticle(payload))
  },
  editArticle: (payload) => {
    dispatch(editArticle(payload));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(EditArticle));
