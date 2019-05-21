import React, { Component } from "react";
import { Text, View } from "react-native";
import { graphql, QueryRenderer } from "react-relay";
import environment from "nb/relay/environment";

function createRelayQueryRenderer(Container, config) {
  return renderProps => (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query queryRendererQuery {
          user {
            id
            name
            invoice
            creditCardLimit
            lastPurchase {
              company
              value
            }
            balance
            rewardsPoints
            lastAcumulatedPoints
            suggestionRewards {
              value
              points
            }
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <Text>Error!</Text>;
        }
        if (!props) {
          return <Text>Loading...</Text>;
        }
        return <Container {...props} />;
      }}
    />
  );
}

export default createRelayQueryRenderer;
