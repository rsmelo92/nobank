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
  +id: string,
  +name: string,
  +$refType: CardsSlider_user$ref,
|};
export type CardsSlider_user$data = CardsSlider_user;
export type CardsSlider_user$key = {
  +$data?: CardsSlider_user$data,
  +$fragmentRefs: CardsSlider_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CardsSlider_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = '0035662b8fdc1e47c874eda7fb2f32e8';
module.exports = node;
