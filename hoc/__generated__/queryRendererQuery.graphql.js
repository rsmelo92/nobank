/**
 * @flow
 * @relayHash 831429eb7929f615500e5aff76da674d
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
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "queryRendererQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "queryRendererQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "queryRendererQuery",
    "id": null,
    "text": "query queryRendererQuery {\n  user {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '57eff7d1496de2a9dd65d62bc8f42023';
module.exports = node;
