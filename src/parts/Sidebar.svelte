<template lang="pug">
  #sidebar
    header
      .wrapper
        img(
          src='portrait.png'
          alt='Cartoon drawing of Daniel Narey'
        )
      
      p.title= 'Daniel Narey'
      
      p.desc= `
        Creative developer fluent in ES6+, Node.js build systems, and visual
        design language. Fan of Svelte, Tailwind, Netlify, FaunaDB, and the
        Jamstack paradigm.
      `
      
    slot

</template>


<style lang="postcss">
  #sidebar
    @apply w-full
    @apply border-darker-blue
    @apply bg-darker-blue
    
  header
    @apply w-screen
    @apply pt-1b px-1b pb-2b

  .wrapper
    @apply w-full max-w-4c
    @apply mx-auto
  
  img
    @apply border rounded-full border-darker-blue
    
  p
    @apply text-lighter
  
  p.title
    @apply pt-one-and-half-b pb-1b
    @apply font-bold text-xl leading-none
  
  p.desc
    @apply font-barlow-semi-condensed
    @apply text-sm-narrow
    

  @screen c11
    #sidebar
      @apply w-4c
      @apply fixed h-screen overflow-y-scroll
      @apply border-r
      
    header
      @apply w-full
      @apply pt-2b
      

  @screen c17
    #sidebar
      width: calc(50vw - 10rem)
      padding-left: calc(50vw - 32rem)
      padding-right: 1rem
      
    header
      @apply pt-3b

    p.desc
      @apply text-base-narrow
  
</style>
