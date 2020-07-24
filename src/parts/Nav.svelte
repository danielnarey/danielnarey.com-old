<script>
  import routes from '../routes.js';
  
  export let title;

</script>


<template lang="pug">
  nav
    ul
      +each('routes as tab')
        +if('tab.title')
          li
            a.button(
              href='{tab.path}'
              class:active='{tab.title === title}'
            )= '{tab.title}'

</template>


<style lang="postcss">
  nav
    @apply w-screen

  ul
    @apply border-t border-b border-bright-red
    @apply bg-light-red
    @apply text-dark
  
  a.button
    @apply w-full
    @apply px-2b
    @apply border-bright-red
    @apply font-bold text-xs leading-xl tracking-wide uppercase text-left
    
  a.button.active
    @apply bg-bright-red
    @apply text-white
          
  li:not(:last-child) > a.button
    @apply border-b
  
  
  @screen c11
    nav
      @apply w-full
      @apply pb-4b


  @screen c17
    nav
      @apply px-1b

    ul
      @apply border-l border-r rounded
    
    a.button
      @apply text-sm leading-2xl

</style>
