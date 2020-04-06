import About from '../app/main/about/About.svelte';
import Projects from '../app/main/projects/Projects.svelte';
import Uses from '../app/main/uses/Uses.svelte';
import Now from '../app/main/now/Now.svelte';


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
