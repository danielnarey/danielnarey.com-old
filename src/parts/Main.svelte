<script>
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

</script>


<template lang="pug">        
  main
    .border
    .container
      slot
      
      p.nav
        button(on:click='{scrollToTop}')
          span= '▲ Top'
    
</template>


<style lang="postcss">
  main
    @apply w-screen min-h-screen
    @apply pt-one-and-half-b pb-2b

  .border
    @apply w-full
    @apply border-t-8 border-softer-blue
  
  p.nav
    @apply w-full
    @apply text-center
  
  button
    @apply text-base font-bold text-bright-red
    
  
  @screen c17
    main
      @apply pt-two-and-half-b pb-3b

    .border
      @apply w-17c

  @screen c21
    .border
      @apply w-19c
      
  @media print
    p.nav
      display: none

</style>
