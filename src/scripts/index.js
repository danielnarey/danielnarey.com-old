/* global document */

import startRouter from './start-router.js';

import App from '../app/App.svelte';
import About from '../app/main/about/About.svelte';
import Projects from '../app/main/projects/Projects.svelte';
import Uses from '../app/main/uses/Uses.svelte';
import Now from '../app/main/now/Now.svelte';


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
