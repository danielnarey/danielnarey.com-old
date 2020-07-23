import About from './routes/About.svelte';
import Projects from './routes/Projects.svelte';
import Uses from './routes/Uses.svelte';
import Now from './routes/Now.svelte';


const routes = [
  {
    path: '/',
    component: About,
    title: 'About',
  },
  { path: '/projects',
    component: Projects,
    title: 'Projects',
  },
  {
    path: '/uses',
    component: Uses,
    title: 'Uses',
  },
  {
    path: '/now',
    component: Now,
    title: 'Now',
  },
  {
    path: '/*',
    redirect: () => '/',
  },
];


export default routes;
