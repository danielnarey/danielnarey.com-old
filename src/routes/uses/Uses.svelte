<script>
  import header from './uses-header.md';
  import content from './uses-content.md';
  import footer from './uses-footer.md';

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
