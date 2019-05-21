import React, { Component } from "react";
import { Text, View } from "react-native";
import { graphql, QueryRenderer } from "react-relay";
import environment from "nb/relay/environment";

export default class QueryRendererHOC extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query queryRendererQuery {
            user {
              id
              name
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          console.log(props);

          if (error) {
            return <Text>Error!</Text>;
          }
          if (!props) {
            return <Text>Loading...</Text>;
          }
          return <Text>User ID: {props.user.name}</Text>;
        }}
      />
    );
  }
}
