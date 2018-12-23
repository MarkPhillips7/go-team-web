import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Players = () => (
  <Query
    query={gql`
query {
  TeamSeason(id:"cjpt1epj50ijp0119511ogsg6") {
    id
    name
    players {
      id
      name
    }
  }
}
    `}
  >
    {({ loading, error, data }) => {
      console.error(data);
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <ul>
          {data.TeamSeason.players.map((player) => (
            <li key={player.id}>
              <p>{`${player.name}`}</p>
            </li>
          ))}
        </ul>
      );
      // return data.rates.map(({ currency, rate }) => (
      //   <div key={currency}>
      //     <p>{`${currency}: ${rate}`}</p>
      //   </div>
      // ));
    }}
  </Query>
);

export default Players;
