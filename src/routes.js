import About from './app/about/About.svelte';
import Projects from './app/projects/Projects.svelte';
import Uses from './app/uses/Uses.svelte';
import Now from './app/now/Now.svelte';


const routes = [
  {
    path: '/',
    label: 'About',
    component: About,
  },
  {
    path: '/projects',
    label: 'Projects',
    component: Projects,
  },
  {
    path: '/uses',
    label: 'Uses',
    component: Uses,
  },
  {
    path: '/now',
    label: 'Now',
    component: Now,
  },
];


export default routes;
