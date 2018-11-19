import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'; /* helps react understand what Apollo is doing by
 taking data that comes from server and injecting it into the react app */

// components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql' // endpoint that we will make requests to
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id='main'>
          <h1>Iqra's Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
