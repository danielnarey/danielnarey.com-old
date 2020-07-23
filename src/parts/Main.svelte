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
        button.unstyled(on:click='{scrollToTop}')
          span= '▲ Top'
    
</template>


<style lang="postcss">
  main
    @apply w-screen min-h-screen
    @apply py-2b
  
  .container
    @apply w-full max-w-10c
    @apply mx-auto
    
  #pageContent
    @apply px-1b
  
  p.nav
    @apply w-full
    @apply text-center
  
  button
    @apply text-base font-bold text-medium-orange
  

  @screen c11
    .container
      @apply max-w-full
      @apply mx-0
      @apply pr-1b
      padding-left: 21rem
  
  @screen c17
    main
      @apply py-3b
      
    .container
      padding-left: calc(50vw - 8rem)
      padding-right: calc(50vw - 32rem)
      
  @media print
    p.nav
      display: none

</style>
