import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { graphql, QueryRenderer } from "react-relay";
import environment from "nb/relay/environment";
import splash from "nb/assets/splash.png";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function createRelayQueryRenderer(Container, config) {
  return renderProps => (
    <QueryRenderer
      environment={environment}
      query={config.query}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <Text>Error!</Text>;
        }
        if (!props) {
          return <Image style={{ width, height }} source={splash} />;
        }
        return <Container {...props} />;
      }}
    />
  );
}

export default createRelayQueryRenderer;
