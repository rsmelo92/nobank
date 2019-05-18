const introspectionQuery = require("graphql/utilities").introspectionQuery;
const request = require("sync-request");
const fs = require("fs");
const assert = require("assert");

const relayPrototypeServer = "https://nugraphql.herokuapp.com/graphql";

if (!relayPrototypeServer) {
  throw new Error("Configure NETWORK_GRAPHQL_URI environment variable.");
}

const response = request("GET", relayPrototypeServer, {
  qs: {
    query: introspectionQuery
  }
});

fs.writeFileSync("./relay/schema.json", response.body.toString("utf-8"));
