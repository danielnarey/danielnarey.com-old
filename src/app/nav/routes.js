import About from '../main/about/About.svelte';
import Projects from '../main/projects/Projects.svelte';
import Uses from '../main/uses/Uses.svelte';
import Now from '../main/now/Now.svelte';


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
