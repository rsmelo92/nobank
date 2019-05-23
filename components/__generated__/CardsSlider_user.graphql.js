/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CardsSlider_user$ref: FragmentReference;
declare export opaque type CardsSlider_user$fragmentType: CardsSlider_user$ref;
export type CardsSlider_user = {|
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
  +$refType: CardsSlider_user$ref,
|};
export type CardsSlider_user$data = CardsSlider_user;
export type CardsSlider_user$key = {
  +$data?: CardsSlider_user$data,
  +$fragmentRefs: CardsSlider_user$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "CardsSlider_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '295fd227f8475f4945508a68c83f8160';
module.exports = node;
