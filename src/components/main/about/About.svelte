<script>
  import Tabpanel from '../Tabpanel.svelte';
  import hello from './hello.md';
  import header from './header.md';
  import content from './content.md';

</script>


<template lang="pug">
  Tabpanel(
    id='0'
    heading='About'
  )
    section
      div.hello
        != '{@html hello.html}'
      
      div.header
        != '{@html header.html}'
  
    section
      != '{@html content.html}'

</template>


<style lang="postcss">
  div.hello
    @apply mb-1b
    @apply text-xl leading-xl-narrow
  
  div.header
    @apply text-lg leading-lg-narrow

</style>
