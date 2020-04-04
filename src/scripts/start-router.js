import navaid from 'navaid';


const startRouter = (target, routes) => {
  const router = navaid();
  let current = new Map(routes).get('/');

  routes.forEach(([path, component]) => {
    router.on(path, () => {
      current.$destroy();

      current = new component({
        target: document.getElementById(target),
      });

      console.log(`loaded: ${path}`);
    });
  });
  
  router.listen();
};


export default startRouter;
