import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createArticle } from '../actions/article';

class CreateArticle extends Component {

  constructor(props) {
    super(props);
    this.state = { title: '', content: '' };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createArticle({ ...this.state, author: this.props.user._id });
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
            <h1>Create an article</h1>
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
                <button onClick={this.onSubmit} className="right btn-small">CREATE</button>
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
  articleData: state.articleReducer.data
});

const mapDispatchProps = (dispatch) => ({
  createArticle: (payload) => {
    dispatch(createArticle(payload));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(CreateArticle));
