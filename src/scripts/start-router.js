import navaid from 'navaid';


const startRouter = (target, routes) => {
  const router = navaid();

  routes.forEach(([path, component]) => {
    router.on(path, () => {
      new component({
        target: document.getElementById(target),
      });
      console.log(`loaded: ${path}`);
    });
  });
  
  router.listen();
};


export default startRouter;
