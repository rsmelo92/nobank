/**
 * @flow
 * @relayHash b278d46d8b2389d3c58c6fae2c409e14
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type queryRendererQueryVariables = {||};
export type queryRendererQueryResponse = {|
  +user: {|
    +name: string,
    +invoice: number,
    +creditCardLimit: number,
    +lastPurchase: {|
      +company: string,
      +value: number,
    |},
    +balance: number,
    +rewardsPoints: number,
    +lastAcumulatedPoints: number,
    +suggestionRewards: {|
      +value: number,
      +points: number,
    |},
  |}
|};
export type queryRendererQuery = {|
  variables: queryRendererQueryVariables,
  response: queryRendererQueryResponse,
|};
*/


/*
query queryRendererQuery {
  user {
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
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "invoice",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "creditCardLimit",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "lastPurchase",
  "storageKey": null,
  "args": null,
  "concreteType": "LastPurchase",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "company",
      "args": null,
      "storageKey": null
    },
    (v3/*: any*/)
  ]
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "balance",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rewardsPoints",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastAcumulatedPoints",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "suggestionRewards",
  "storageKey": null,
  "args": null,
  "concreteType": "SuggestionRewards",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "points",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "queryRendererQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "queryRendererQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "queryRendererQuery",
    "id": null,
    "text": "query queryRendererQuery {\n  user {\n    name\n    invoice\n    creditCardLimit\n    lastPurchase {\n      company\n      value\n    }\n    balance\n    rewardsPoints\n    lastAcumulatedPoints\n    suggestionRewards {\n      value\n      points\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '351cf5a5a6cad4f2ee7af989f370accb';
module.exports = node;
