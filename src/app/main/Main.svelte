<script context="module">
  import About from './about/About.svelte';
  import Projects from './projects/Projects.svelte';
  import Uses from './uses/Uses.svelte';
  import Now from './now/Now.svelte';
  
  export const routes = [
    ['/', 'About', About],
    ['/projects', 'Projects', Projects],
    ['/uses', 'Uses', Uses],
    ['/now', 'Now', Now],
  ];

</script>


<script>
  import { Router, Route } from 'svero';

</script>


<template lang="pug">        
  main
    .container
      Router
        +each('routes as [path, label, component]')
          Route(path='{path}' component='{component}')

        Route(path='*' redirect='/')
    
</template>


<style lang="postcss">
  main
    w-screen min-h-screen
    py-2b

      
  @screen c17
    main
      py-3b

</style>