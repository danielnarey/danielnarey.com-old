/* global document */

import navaid from 'navaid';


const startRouter = (targetId, routes) => {
  console.log('starting router...');
  
  const router = navaid();
  const target = document.getElementById(targetId);

  routes.forEach(([path, component]) => {
    router.on(path, () => {
      Array.from(target.childNodes).forEach((node) => {
        node.parentNode.removeChild(node);
      });

      new component({ target });

      console.log(`loaded: ${path}`);
    });
  });
  
  router.listen();
  
  return (path) => () => router.route(path);
};


export default router;
