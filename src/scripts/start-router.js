/* global document */

import navaid from 'navaid';


const startRouter = (targetId, routes) => {
  const router = navaid();

  routes.forEach(({ path, component }) => {
    router.on(path, () => {
      const target = document.getElementById(targetId);

      Array.from(target.childNodes).forEach((node) => {
        node.parentNode.removeChild(node);
      });

      new component({ target });
    });
  });
  
  router.listen();
};


export default startRouter;
