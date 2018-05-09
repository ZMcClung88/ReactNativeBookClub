import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import BookDetail from './BookDetail';

class BookList extends Component {
  state = { books: [] };

  componentDidMount() {
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .then(response => this.setState({ books: response.data.items }));
  }

  renderBooks() {
    // console.log('state', this.state.books);
    return this.state.books.map(book => <BookDetail key={book.id} book={book} />);
    // return <BookDetail book={this.state.books} />;
  }
  render() {
    // console.log(this.state);
    return <ScrollView>{this.renderBooks()}</ScrollView>;
  }
}

export default BookList;
