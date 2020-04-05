import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './styles/App.scss';
import Home from './components/Home';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Link to="/">
            <p>Forever London</p>
          </Link>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id/:slug" component={SingleProduct} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
