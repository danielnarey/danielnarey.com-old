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
  let contentLoaded = false;
  
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
    window.scrollTo({ top: 0 });
    contentLoaded = true;
  });

  onDestroy(() => {
    if (Navaid.unlisten) { Navaid.unlisten(); }
  });

</script>


<template lang="pug">
  #app
    Sidebar
      Nav('{...Props}')

    Main
      +if('PageContent')
        svelte:component(this='{PageContent}' '{...Props}')
    
    Footer

</template>


<style lang="postcss">
  @import 'typeface-barlow'
  @import 'typeface-barlow-semi-condensed'
  @import 'typeface-source-code-pro'

  #app
    @apply bg-near-white
    @apply text-darker font-barlow font-regular text-sm

  @screen c17
    #app
      @apply text-base

</style>