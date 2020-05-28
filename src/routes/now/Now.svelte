<script>
  import header from './now-header.md';
  import content from './now-content.md';
  import footer from './now-footer.md';

</script>


<template lang="pug">
  section.header
      != '{@html header.html}'

  section.content
      != '{@html content.html}'
  
  section
    != '{@html footer.html}'

</template>


<style lang="postcss">
  section.header
    @apply text-lg leading-lg-narrow
  
  section.content
    @apply leading-sm-narrow
  

  @screen c17
    section.content
      @apply leading-base-narrow

</style>
