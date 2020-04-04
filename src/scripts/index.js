/* global document */

import App from '../app/App.svelte';



try {
  new App({
    target: document.body,
  });
  
  startRouter('pageContent', [
    ['/', About],
    ['/projects', Projects],
    ['/uses', Uses],
    ['/now', Now],
  ]);
} catch (err) {
  console.log(err);
}
