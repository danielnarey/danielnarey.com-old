/* global document */

import navaid from 'navaid';


const startRouter = (targetId, routes) => {
  console.log('starting router...');
  
  const router = navaid();

  routes.forEach(({ path, component }) => {
    router.on(path, () => {
      const target = document.getElementById(targetId);

      Array.from(target.childNodes).forEach((node) => {
        node.parentNode.removeChild(node);
      });

      new component({ target });

      console.log(`loaded: ${path}`);
    });
  });
  
  router.listen();
  
  return router;
};


export default startRouter;
