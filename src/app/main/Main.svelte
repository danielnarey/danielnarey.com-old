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


<template lang="pug">        
  main
    .container
      p= '{label}'
    
</template>


<style lang="postcss">
  main
    @apply w-screen min-h-screen
    @apply py-2b

      
  @screen c17
    main
      @apply py-3b

</style>