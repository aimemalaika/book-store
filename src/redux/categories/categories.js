import React, { Component } from 'react';
import Header from '../../components/header';

class Categories extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <h1>Books Categories</h1>
      </>
    );
  }
}

export default Categories;
