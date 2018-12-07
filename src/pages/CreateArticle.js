import React, { Component } from 'react';
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

  render() {
    return (
      <main>
        <h1>Create an article</h1>
        <form>
          <label htmlFor="title">Title</label>
          <input
            type="text" name="title" required
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <label htmlFor="content">Content</label>
          <textarea
            name="content" required
            value={this.state.content}
            onChange={this.handleInputChange}
          />
          <button onClick={this.onSubmit}>CREATE</button>
        </form>
        {this.props.articleData && <p>{this.props.articleData}</p>}
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
