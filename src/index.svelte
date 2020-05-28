<script>
  import './styles/base.svelte';
  import './styles/container.svelte';
  import './styles/sidebar.svelte';
  import './styles/typeset.svelte';
  import './styles/circuit-board.svelte';

  import Header from './header/Header.svelte';
  import Nav from './nav/Nav.svelte';
  import Main from './main/Main.svelte';
  import Footer from './footer/Footer.svelte';

</script>


<template lang="pug">
  div.app
    div.sidebar
      Header
      
      Nav
      
    Main
    
    Footer

</template>


<style lang="postcss">
  @import 'typeface-barlow'
  @import 'typeface-barlow-semi-condensed'
  @import 'typeface-source-code-pro'
  
  div.app
    @apply bg-near-white
    @apply text-darker font-barlow font-regular text-sm leading-sm
  
  div.sidebar
    @apply border-darker-blue
    @apply bg-darker-blue


  @screen c11
    div.sidebar
      @apply border-r

    
  @screen c17
    div.app
      @apply text-base leading-base

</style>