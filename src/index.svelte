<script>
  import { onMount, afterUpdate, onDestroy } from 'svelte';
  import navaid from 'navaid';
  import routes from './routes.js';
  import Sidebar from './parts/Sidebar.svelte';
  import Nav from './parts/Nav.svelte';
  import Main from './parts/Main.svelte';
  import Footer from './parts/Footer.svelte';
  import './styles/index.js';

  let PageContent;
  let Props = {};
  let Navaid = navaid('/');
  
  routes.forEach(({ path, redirect, component, ...routeParams }) => {
    Navaid.on(path, (pathParams) => {
      if (redirect) {
        Navaid.route(redirect(pathParams), true);
      } else {
        PageContent = component;
        Props = { path, ...pathParams, ...routeParams };
      }
    })
  });

  onMount(() => {
    Navaid.listen();
  });
  
  afterUpdate(() => {
    if (window.innerWidth >= 704) {
      window.scrollTo({ top: 0 });
    }
  });

  onDestroy(() => {
    if (Navaid.unlisten) { Navaid.unlisten(); }
  });

</script>


<template lang="pug">
  #app
    Sidebar
      Nav('{...Props}')
    
    .

    Main
      +if('PageContent')
        svelte:component(this='{PageContent}' '{...Props}')
    
    Footer

</template>


<style lang="postcss">
  @import 'typeface-barlow'
  @import 'typeface-source-code-pro'

  #app
    @apply bg-near-white
    @apply text-darker
    @apply font-barlow font-regular text-sm
  
  .content-border
    @apply w-screen
    @apply border-t-8 border-softer-blue
    
  @screen c11
    .content-border
      @apply fixed z-10
    
  @screen c17
    .content-border
      @apply w-17c
  
  @screen c21
    .content-border
      @apply w-19c
  
  @media print
    .content-border
      @apply display-none

</style>