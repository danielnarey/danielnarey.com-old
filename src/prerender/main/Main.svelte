<script>
  import About from '../../app/about/About.svelte';

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
