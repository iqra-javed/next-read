import React, { Component } from 'react';
import { unlink } from 'fs';

class BookList extends Component {
  render() {
    return (
      <div>
        <ul id="book-list">
            <li>Book name</li>
        </ul>
      </div>
    );
  }
}

export default BookList;