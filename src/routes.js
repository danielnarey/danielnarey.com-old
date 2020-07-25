import Journal from './routes/Journal.svelte';
import Projects from './routes/Projects.svelte';
import Uses from './routes/Uses.svelte';


const routes = [
  {
    path: '/',
    component: Journal,
    title: 'Journal',
  },
  {
    path: '/projects',
    component: Projects,
    title: 'Projects',
  },
  {
    path: '/uses',
    component: Uses,
    title: 'Uses',
  },
  {
    path: '/*',
    redirect: () => '/',
  },
];


export default routes;
