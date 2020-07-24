import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { GlobalStyle } from './styles/GlobalStyles';
import Context from './Context';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api',
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
);
