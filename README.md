# Franklin JSX-Like (Dom Helpers)
Dom Helpers inspired by React JSX to make the Franklin JS code more concise, easier to write, understand and review.

## Example Page
- https://main--franklin-jsx-like--andreituicu.hlx.live/

## Installation

Simply add the following items to your repository
* Copy https://github.com/andreituicu/franklin-jsx-like/blob/main/scripts/dom-helpers.js into `/scripts`
* (optional) Configure eslint https://github.com/andreituicu/franklin-jsx-like/blob/main/.eslintrc.js#L20
* (optional) Only in case you would like to make changes to the `domEl` function to enhance it for your particular usecase
you can also take the test setup, to ensure nothing gets broken
  * Copy https://github.com/andreituicu/franklin-jsx-like/blob/main/test/scripts/dom-helps.test.js
  * Add https://github.com/andreituicu/franklin-jsx-like/blob/main/package.json#L7-L8
  * Add https://github.com/andreituicu/franklin-jsx-like/blob/main/.github/workflows/run-tests.yaml#L16

## Why?
The Dom Helper functions allow for:
* a more concise code
* composable structure
* dom like syntax structure to easily visualise the resulting HTML when looking at the code
* faster development and code review of block code
* while maintaining  100 LHS for performance
* 100% browser compatible JS / no compilation required
* no intermediary representation 
* with minimal overhead - a few ifs and function calls

## Main Usecases
* DOM rendering of dynamic data from spreadsheets and indexes
* Adding new DOM elements during block decoration to what Franklin provides, based on the word document (e.g. adding buttons for a carousel, where the elements are coming from the word document)


## Quick Examples

```javascript
import {
  a, button, div, h3, li, p, strong, ul,
} from '../../scripts/dom-helpers.js';
import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

...

// create elements
const div1 = div();
const paragraph1 = p();
const button1 = button();

div1.append(paragraph1);
div1.appendChild(button1);

// create elements with classes, attributes and children
const paragraph2 = p({ class: 'paragraph' }, 'My sample text');
const div2 = div({ class: 'text-box' }, paragraph2);
const anchor1 = a({ class: 'btn primary', href: 'https://example.com' }, 'Go To Example');

// add event listeners
const button2 = button({ class: 'secondary', onclick: (e) => { console.log(`button ${e.target} was clicked`); } });

// compose
const card = (
  div({ class: 'card' },
    div({ class: 'card-image' },
      createOptimisedImage(imageLink, 'Card Thumbnail', false,  [{ width: '750' }]),
    ),
    div({ class: 'card-body' },
      h3({ class: 'card-title' }, 'Card Title'),
      p({ class: 'card-description' }, 'Card Description'),
    ),
  )
)

// conditionals
const isSuccess = true // or false
const box1 = div({ class: 'result' }, 
  isSuccess ? div({ class: 'success' }, 'Was successful') : div({ class: 'error' }, 'Was not successful'),
)

const hasDescrioption = false // or true
const box2 = div(
  hasDescrioption ? p('Description') : '', // you can use empty string to omit adding extra children
);


// loop
const data = ['item1', 'item2', 'item3'];
const list1 = (
  ul({ class: 'list1' },
    ...data.map((item) => li(item)),
  )
);
```

## Sample cards blocks

This repository contains to sample implementations of cards blocks
* Dynamic Cards (content retrieved from an API): https://github.com/andreituicu/franklin-jsx-like/blob/main/blocks/dynamic-cards/dynamic-cards.js
* Static Cards (content directly in word): https://github.com/andreituicu/franklin-jsx-like/blob/main/blocks/static-cards/static-cards.js

## More Real Project examples

* https://github.com/hlxsites/moleculardevices/blob/b785b6f/blocks/ordering-options/ordering-options.js#L340-L375
* https://github.com/hlxsites/moleculardevices/blob/a6db5db/blocks/blog-teaser/blog-teaser.js#L9-L48
* https://github.com/hlxsites/moleculardevices/blob/36b8ba1/blocks/related-assay-data/related-assay-data.js#L32-L42
* https://github.com/hlxsites/durysta/blob/2b527dd/blocks/isi/isi.js#L52-L64
* https://github.com/hlxsites/zemax/blob/a518582/blocks/user-licenses/user-licenses.js#L319-L353
