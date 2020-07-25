<template lang="pug">
  #sidebar
    header
      img(
        src='/portrait.png'
        alt='Cartoon drawing of Daniel Narey'
      )
      
      p.title
        | Daniel Narey
      
      p.desc
        | Creative developer fluent in ES6+, Node.js build systems, and visual
        | design language. Fan of Svelte, Tailwind, Netlify, FaunaDB, and the
        | Jamstack paradigm.
      
    slot

</template>


<style lang="postcss">
  #sidebar
    @apply w-screen
    @apply border-darker-blue
    @apply bg-darker-blue
    @apply text-lighter
    
  header
    @apply w-full max-w-4c
    @apply mx-auto
    @apply p-2b
  
  img
    @apply border rounded-full border-darker-blue

  p.title
    @apply pt-2b pb-1b
    @apply font-bold text-lg leading-none
  
  p.desc
    @apply font-medium text-sm-narrow
    

  @screen c11
    #sidebar
      @apply fixed h-screen overflow-y-scroll
      @apply w-4c
      @apply border-r
    
    header
      @apply max-w-none
      @apply mx-0

  @screen c17
    #sidebar
      @apply w-5c
      
    header
      @apply pt-3b
      
  @screen c21
    #sidebar
      @apply w-6c
  
</style>
