<script>
  import content from './content.md';
  
</script>


<template lang="pug">
  section
  	!= '{@html content.html}'

</template>


<style lang="postcss">
  section
    @apply text-center

</style>
