import navaid from 'navaid';


const startRouter = (target, routes) => {
  const router = navaid();
  let current;

  routes.forEach(([path, component]) => {
    router.on(path, () => {
      if (current) {
        current.$destroy();
      }

      current = new component({
        target: document.getElementById(target),
      });

      console.log(`loaded: ${path}`);
    });
  });
  
  router.listen();
};


export default startRouter;
