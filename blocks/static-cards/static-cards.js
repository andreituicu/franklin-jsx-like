import { createOptimizedPicture } from '../../scripts/lib-franklin.js';
import { div, li, ul } from '../../scripts/dom-helpers.js';

export default function decorate(block) {
  /* change to ul, li */
  const rows = [...block.children];
  block.innerHTML = '';

  block.append(
    ul(
      ...rows.map((row) => {
        const columns = [...row.children];
        return li(
          ...columns.map((column) => (column.children.length === 1 && column.querySelector('picture')
            ? div({ class: 'cards-card-image' }, ...column.children)
            : div({ class: 'cards-card-body' }, ...column.children))),
        );
      }),
    ),
  );

  // optimise images
  block.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
}
