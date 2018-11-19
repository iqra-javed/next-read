import React, { Component } from 'react';
import { gql } from 'apollo-boost'; // helps parse graphql queries for react
import { graphql } from 'react-apollo';

// make query
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

/* bind query to component so we have access to data 
that comes back from the query. That data is stored 
in the component's props */

class BookList extends Component {
  displayBooks() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading books...</div>;
    } else {
      return data.books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  }
  render() {
    //   console.log(this.props)
    return (
      <div>
        <ul id='book-list'>
          {this.displayBooks()}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
