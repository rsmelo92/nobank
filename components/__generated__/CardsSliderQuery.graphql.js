/**
 * @flow
 * @relayHash 704fc7352d68e71e269599124fbff71e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CardsSlider_user$ref = any;
export type CardsSliderQueryVariables = {||};
export type CardsSliderQueryResponse = {|
  +user: {|
    +$fragmentRefs: CardsSlider_user$ref
  |}
|};
export type CardsSliderQuery = {|
  variables: CardsSliderQueryVariables,
  response: CardsSliderQueryResponse,
|};
*/


/*
query CardsSliderQuery {
  user {
    ...CardsSlider_user
    id
  }
}

fragment CardsSlider_user on User {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CardsSliderQuery",
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
    "name": "CardsSliderQuery",
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CardsSliderQuery",
    "id": null,
    "text": "query CardsSliderQuery {\n  user {\n    ...CardsSlider_user\n    id\n  }\n}\n\nfragment CardsSlider_user on User {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '7f8b96c6b878c6e7e629ee9b3dbc2ae9';
module.exports = node;
