/* global document */

import App from '../app/App.svelte';


try {
  new App({
    target: document.body,
  });
} catch (err) {
  console.log(err);
}
