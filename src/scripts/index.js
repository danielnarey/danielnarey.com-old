/* global document */

import App from '../app/App.svelte';


try {
  const app = new App({
    target: document.body,
  });
  
} catch (err) {
  console.log(err);
}
