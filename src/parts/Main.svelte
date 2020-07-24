<script>
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

</script>


<template lang="pug">        
  main
    .container
      #pageContent
        slot
      
      p.nav
        button(on:click='{scrollToTop}')
          span= '▲ Top'
    
</template>


<style lang="postcss">
  main
    @apply w-screen min-h-screen
    @apply py-2b
    
  #pageContent
    @apply px-1b
  
  p.nav
    @apply w-full
    @apply text-center
  
  button
    @apply text-base font-bold text-medium-red
    
  
  @screen c17
    main
      @apply py-3b
      
  @media print
    p.nav
      display: none

</style>
