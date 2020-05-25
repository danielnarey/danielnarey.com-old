<script>
  import markdown from '../../helpers/markdown.js';
  
  const content = markdown(`
    Built with Svelte and [Metamodern Design's](https://github.com/metamodern-design) open-source stack
    
    ©2020 Daniel C. Narey
  `);
  
</script>


<template lang="pug">
  footer.circuit-board
    .container
      section
        != '{@html content}'

</template>


<style lang="postcss">
  footer
    @apply w-screen min-h-7c
    @apply pt-2b
    @apply bg-darker-blue
    @apply text-white text-sm leading-sm
  
  p
    @apply text-center


  @screen c17
    footer
      @apply pt-3b

</style>
