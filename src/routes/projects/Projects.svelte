<script>
  import Tabpanel from '../../components/Tabpanel.svelte';
  import header from './header.md';
  import content from './content.md';

</script>


<template lang="pug">
  Tabpanel(
    id='1'
    heading='Projects'
  )
    section.header
      != '{@html header.html}'
  
    section
      != '{@html content.html}'

</template>


<style lang="postcss">
  section.header
    @apply text-lg leading-lg-narrow

</style>
