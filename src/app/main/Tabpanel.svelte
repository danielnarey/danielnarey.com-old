<script>
  export let id;
  export let heading;

</script>


<template lang="pug">
  div.typeset(
    id='main-tabpanel-{id}'
    role='tabpanel'
    aria-labelledby='nav-tab-{id}'
  )
    h1= heading

    slot

</template>


<style lang="postcss">
  div
    @apply px-1b

</style>
