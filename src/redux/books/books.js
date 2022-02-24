import React, { Component } from 'react';
import Header from '../../components/header';

class Books extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <h1>Books List</h1>
      </>
    );
  }
}

export default Books;
