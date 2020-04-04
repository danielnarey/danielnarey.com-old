/* global document */

import navaid from 'navaid';


const startRouter = (targetId, routes) => {
  const router = navaid();
  const target = document.getElementById(targetId);

  routes.forEach(([path, component]) => {
    router.on(path, () => {
      const children = Array.from(target.childNodes);
      
      children.forEach((node) => {
        node.parentNode.removeChild(node);
      });

      new component({ target });

      console.log(`loaded: ${path}`);
    });
  });
  
  router.listen();
};


export default startRouter;
