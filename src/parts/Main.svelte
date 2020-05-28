<script>
  import { onMount, onDestroy } from 'svelte';
  import navaid from 'navaid';
  import routes from '../routes/index.js';
  
  
  let currentRoute = { id: 0, ...routes[0] };
  let Navaid;

  onMount(() => {
    Navaid = navaid('/');
    
    routes.forEach((route, i) => {
      Navaid.on(route.path, () => { 
        currentRoute = { id: i, ...route };
      })
    });
    
    Navaid.listen();
  });

  onDestroy(() => {
    if (Navaid) {
      Navaid.unlisten();
    }
  });
  
</script>


<template lang="pug">        
  main
    div.container#pageContent
      div.typeset(
        id='main-tabpanel-{currentRoute.id}'
        role='tabpanel'
        aria-labelledby='nav-tab-{currentRoute.id}'
      )
        h1= '{currentRoute.label}'
        svelte:component(this='{currentRoute.component}')
    
</template>


<style lang="postcss">
  main
    @apply w-screen min-h-screen
    @apply py-2b
  
  div.typeset
    @apply px-1b

      
  @screen c17
    main
      @apply py-3b

</style>
