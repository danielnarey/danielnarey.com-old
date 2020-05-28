<script>
  import { onMount, onDestroy } from 'svelte';
  import Navaid from 'navaid';

  import About from './about/About.svelte';
  import Projects from './projects/Projects.svelte';
  import Uses from './uses/Uses.svelte';
  import Now from './now/Now.svelte';
  
  
  let Route = About;
  let router;

  onMount(() => {
    router = Navaid('/')
      .on('/', () => { Route = About })
      .on('/projects', () => { Route = Projects })
      .on('/uses', () => { Route = Uses })
      .on('/now', () => { Route = Now })
      .listen();
  });

  onDestroy(() => {
    if (router) {
      router.unlisten();
    }
  });
  
</script>


<template lang="pug">        
  main
    .container#pageContent 
      svelte:component(this='{Route}')
    
</template>


<style lang="postcss">
  main
    @apply w-screen min-h-screen
    @apply py-2b

      
  @screen c17
    main
      @apply py-3b

</style>
