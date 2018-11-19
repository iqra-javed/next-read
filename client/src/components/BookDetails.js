import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {
  render() {
    return (
      <div id='book-details'>
        <p>Output book details here</p>
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookDetails);