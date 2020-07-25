<script>
  import Routes from '../routes.js';
  
  export let title;

</script>


<template lang="pug">
  nav
    ul
      +each('Routes as entry')
        +if('entry.title')
          li
            a.button(
              href='{entry.path}'
              class:active='{entry.title === title}'
            )= '{entry.title}'

</template>


<style lang="postcss">
  nav
    @apply w-screen

  ul
    @apply border-t border-b border-bright-red
    @apply bg-light-red
    @apply text-dark
    @apply font-bold text-xs leading-xl tracking-wide uppercase text-left
  
  a.button
    @apply w-full
    @apply px-2b
    @apply border-bright-red
    
  a.button.active
    @apply bg-bright-red
    @apply text-white
          
  li:not(:last-child) > a.button
    @apply border-b


  @screen c11
    nav
      @apply w-full
      @apply px-2b pb-4b

    ul
      @apply border-l border-r rounded

    a.button
      @apply px-1b

</style>
