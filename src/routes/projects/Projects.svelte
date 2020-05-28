<script>
  import header from './projects-header.md';
  import content from './projects-content.md';

</script>


<template lang="pug">
  section.header
    != '{@html header.html}'

  section
    != '{@html content.html}'

</template>


<style lang="postcss">
  section.header
    @apply text-lg leading-lg-narrow

</style>
