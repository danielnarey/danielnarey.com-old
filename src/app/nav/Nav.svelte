<script>
  import { routes } from '../main/Main.svelte';
  
  export let publicUrl = '';
  
  const setRoute = (path) => {
    const fullPath = `${publicUrl}${path}`.replace('//', '/');
    
    console.log(`pushState: ${path}`);
    history.pushState(fullPath, null, fullPath);
  };

</script>


<template lang="pug">
  nav
    ul(
      role='tablist'
      aria-orientation='vertical'
    )
      +each('routes as [path, label], i')
        li
          button(
            id='nav-tab-{i}'
            role='tab'
            aria-controls='main-tabpanel-{i}'
            on:click='{setRoute(path)}'
          )= '{label}'

</template>


<style lang="postcss">
  nav
    @apply w-screen

  ul
    @apply border-t border-b border-bright-red
    @apply bg-light-red
    @apply text-dark
  
  li > button
    @apply w-full
    @apply px-2b
    @apply border-bright-red
    @apply font-bold text-xs leading-base tracking-wide uppercase text-left
          
  li:not(:last-child) > button
    @apply border-b
    
  li > button.active
    @apply bg-bright-red
    @apply text-white
  
  
  @screen c11
    nav
      @apply w-full
      @apply pb-4b


  @screen c17
    nav
      @apply px-1b

    ul
      @apply border-l border-r rounded
    
    li > button
      @apply text-sm leading-base-wide

</style>
