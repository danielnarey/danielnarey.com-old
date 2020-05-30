import About from './About.svelte';
import Projects from './Projects.svelte';
import Uses from './Uses.svelte';
import Now from './Now.svelte';


const routes = [
  { path: '/', component: About, label: 'About' },
  { path: '/projects', component: Projects, label: 'Projects' },
  { path: '/uses', component: Uses, label: 'Uses' },
  { path: '/now', component: Now, label: 'Now' },
];


export default routes;
