import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {

  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
      </nav>
    );
  }
}
