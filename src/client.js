/* global document */

import navaid from 'navaid';

import Index from './index.svelte';
import About from './routes/about/About.svelte';
import Projects from './routes/projects/Projects.svelte';
import Uses from './routes/uses/Uses.svelte';
import Now from './routes/now/Now.svelte';


const startRouter = (targetId, routes) => {
  const router = navaid();
  const target = document.getElementById(targetId);

  routes.forEach(([ path, Component ]) => {
    router.on(path, () => {
      Array.from(target.childNodes).forEach((node) => {
        node.parentNode.removeChild(node);
      });

      return new Component({ target });
    });
  });
  
  router.listen();
  
  return router;
};


try {
  const client = new Index({
    target: document.body,
    hydrate: true,
  });
  
  startRouter(document.getElementById('pageContent'), [
    [ '/', About ],
    [ '/projects', Projects ],
    [ '/uses', Uses ]
    [ '/now', Now ]
  ]);
} catch (err) {
  console.error(err);
}
