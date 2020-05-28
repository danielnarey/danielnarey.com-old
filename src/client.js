/* global document */

import Index from './index.svelte';


try {
  const client = new Index({
    target: document.body,
    hydrate: true,
  });
} catch (err) {
  console.error(err);
}
