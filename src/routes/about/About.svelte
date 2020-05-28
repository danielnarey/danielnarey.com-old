<script>
  import hello from './about-hello.md';
  import header from './about-header.md';
  import content from './about-content.md';

</script>


<template lang="pug">
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
