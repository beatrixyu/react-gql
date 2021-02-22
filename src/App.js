import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
import { PokemonsContainer } from './containers/PokemonsContainer.js'
import './css/style.css'

export default function App() {

  const client = new ApolloClient({
    uri:'https://graphql-pokemon2.vercel.app/'
  });
  
  return (
    <ApolloProvider client={client}> 
      {/* client to provider component to the graphql server */}
      <main>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
}