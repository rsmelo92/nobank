/**
 * @flow
 * @relayHash ea681b8805a9dca9552da666b611fd23
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type queryRendererQueryVariables = {||};
export type queryRendererQueryResponse = {|
  +user: {|
    +id: string,
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "user",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "invoice",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "creditCardLimit",
        "args": null,
        "storageKey": null
      },
      {
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
          (v0/*: any*/)
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "balance",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "rewardsPoints",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "lastAcumulatedPoints",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "suggestionRewards",
        "storageKey": null,
        "args": null,
        "concreteType": "SuggestionRewards",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "points",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "queryRendererQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "queryRendererQuery",
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "queryRendererQuery",
    "id": null,
    "text": "query queryRendererQuery {\n  user {\n    id\n    name\n    invoice\n    creditCardLimit\n    lastPurchase {\n      company\n      value\n    }\n    balance\n    rewardsPoints\n    lastAcumulatedPoints\n    suggestionRewards {\n      value\n      points\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f7afcad6880593b37eb39422ef69a4a6';
module.exports = node;
