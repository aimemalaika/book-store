import React, { Component } from 'react';
import BookForm from '../../components/bookForm';
import BookList from '../../components/bookList';
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
        <BookList />
        <BookForm />
      </>
    );
  }
}

export default Books;
