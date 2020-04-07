<script>
  import Header from '../components/header/Header.svelte';
  import Nav from '../components/nav/Nav.svelte';
  import Main from '../components/main/Main.svelte';
  import Footer from '../components/footer/Footer.svelte';

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