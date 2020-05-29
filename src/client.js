/* global document */

import App from './index.svelte';


try {
  const client = new App({
    target: document.body,
    hydrate: true,
  });
} catch (err) {
  console.error(err);
}
