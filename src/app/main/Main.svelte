<script context="module">
  import About from './about/About.svelte';
  
  export const routes = [
    ['/', About],
    ['/projects', Projects],
    ['/uses', Uses],
    ['/now', Now],
  ];

</script>


<template lang="pug">        
  main
    .container#pageContent 
      About
    
</template>


<style lang="postcss">
  main
    @apply w-screen min-h-screen
    @apply py-2b

      
  @screen c17
    main
      @apply py-3b

</style>