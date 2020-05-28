<script>
  import content from './content.md';
  
</script>


<template lang="pug">
  footer.circuit-board
    .container
      section
        != '{@html content.html}'

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
