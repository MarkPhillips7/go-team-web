import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Players from "./Players";

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        hello(
          name: "USD"
        ) {
          message
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      console.error(data);
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div>
          <p>{`Message: ${data.hello.message}`}</p>
          <Players/>
        </div>
      )
      // return data.rates.map(({ currency, rate }) => (
      //   <div key={currency}>
      //     <p>{`${currency}: ${rate}`}</p>
      //   </div>
      // ));
    }}
  </Query>
);

export default ExchangeRates;
