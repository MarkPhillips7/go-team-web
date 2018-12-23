import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
// import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  // link: httpLink,
  uri: "https://api.graph.cool/simple/v1/cjpeel49p81sr0135wsewoo11"//"https://w5xlvm3vzz.lp.gql.zone/graphql"
});

// client
//   // .query({
//   //   query: gql`
//   //     {
//   //       rates(currency: "USD") {
//   //         currency
//   //       }
//   //     }
//   //   `
//   // })
//   .query({
//     query: gql`
//       {
//         hello(name: "USD") {
//           message
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<ApolloApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
