/* eslint-disable no-alert */

import { createOptimizedPicture } from '../../scripts/lib-franklin.js';
import {
  button, div, li, p, strong, ul,
} from '../../scripts/dom-helpers.js';
import ffetch from '../../scripts/ffetch.js';

export default async function decorate(block) {
  // You can find ffetch and other cool stuff in the Franklin block party: https://www.hlx.live/developer/block-collection#block-party
  // Or directly at: https://github.com/Buuhuu/ffetch
  const content = await ffetch('/cards-content.json').all();

  block.append(
    ul(
      ...content.map((card) => (
        li(
          div({ class: 'cards-card-image' },
            createOptimizedPicture(card.image, card.title, false, [{ width: '750' }]),
          ),
          div({ class: 'cards-card-body' },
            p(
              strong(card.title),
            ),
            p(card.body),
            button({ class: 'primary', onclick: () => { alert('Very inquisitive! :)'); } }, 'Read More'),
          ),
        )
      )),
    ),
  );
}
