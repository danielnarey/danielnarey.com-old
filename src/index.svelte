<script>
  import './styles/index.js';

  import Header from './parts/Header.svelte';
  import Nav from './parts/Nav.svelte';
  import Main from './parts/Main.svelte';
  import Footer from './parts/Footer.svelte';

</script>


<template lang="pug">
  .app
    .sidebar
      Header
      
      Nav
      
    Main
    
    Footer

</template>


<style lang="postcss">
  @import 'typeface-barlow'
  @import 'typeface-barlow-semi-condensed'
  @import 'typeface-source-code-pro'
  
  .app
    @apply bg-near-white
    @apply text-darker font-barlow font-regular text-sm leading-sm
  
  .sidebar
    @apply border-darker-blue
    @apply bg-darker-blue


  @screen c11
    .sidebar
      @apply border-r

    
  @screen c17
    .app
      @apply text-base leading-base

</style>