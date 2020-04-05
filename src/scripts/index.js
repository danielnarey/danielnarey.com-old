/* global document */

import App from '../app/App.svelte';
import routes from './routes.js';
import startRouter from './start-router.js';


try {
  new App({
    target: document.body,
  });
  
  startRouter('pageContent', routes);
} catch (err) {
  console.log(err);
}
