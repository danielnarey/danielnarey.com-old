<script>
  import Tabpanel from '../Tabpanel.svelte';
  import header from './header.md';
  import content from './content.md';
  import footer from './footer.md';

</script>


<template lang="pug">
  Tabpanel(
    id='2'
    heading='Uses'
  )
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
