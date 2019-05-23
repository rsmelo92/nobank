/**
 * @flow
 * @relayHash d9862da5c0b0b9670a8ff0e1b69ee3e6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CardsSlider_user$ref = any;
export type MainScreenQueryVariables = {||};
export type MainScreenQueryResponse = {|
  +user: {|
    +name: string,
    +$fragmentRefs: CardsSlider_user$ref,
  |}
|};
export type MainScreenQuery = {|
  variables: MainScreenQueryVariables,
  response: MainScreenQueryResponse,
|};
*/


/*
query MainScreenQuery {
  user {
    name
    ...CardsSlider_user
    id
  }
}

fragment CardsSlider_user on User {
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
  "name": "value",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MainScreenQuery",
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
          {
            "kind": "FragmentSpread",
            "name": "CardsSlider_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MainScreenQuery",
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
              (v1/*: any*/)
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
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "points",
                "args": null,
                "storageKey": null
              }
            ]
          },
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
    "name": "MainScreenQuery",
    "id": null,
    "text": "query MainScreenQuery {\n  user {\n    name\n    ...CardsSlider_user\n    id\n  }\n}\n\nfragment CardsSlider_user on User {\n  invoice\n  creditCardLimit\n  lastPurchase {\n    company\n    value\n  }\n  balance\n  rewardsPoints\n  lastAcumulatedPoints\n  suggestionRewards {\n    value\n    points\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd7f2c1f95cd0c5c47d857a01382205ba';
module.exports = node;
