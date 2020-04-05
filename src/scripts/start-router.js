/* global document */

import navaid from 'navaid';


const startRouter = (targetId, routes) => {
  const router = navaid();
  const target = document.getElementById(targetId);

  routes.forEach(({ path, component }) => {
    router.on(path, () => {
      Array.from(target.childNodes).forEach((node) => {
        node.parentNode.removeChild(node);
      });

      return new component({ target });
    });
  });
  
  router.listen();
};


export default startRouter;
