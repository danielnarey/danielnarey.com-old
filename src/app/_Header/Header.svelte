<template lang="pug">
  header
    div
      img(
        src='media/portrait.png'
        alt='Cartoon drawing of Daniel Narey'
      )
    
    p.title= 'Daniel Narey'
    
    p.desc= 'Node.js developer, visual designer & JAMstack enthusiast'

</template>


<style lang="postcss">
  header
    @apply w-screen
    @apply pt-1b px-1b pb-2b

  div
    @apply w-full max-w-5c
    @apply mx-auto
  
  img
    @apply border rounded border-darker-blue
  
  p.title
    @apply pt-one-and-half-b pb-1b
    @apply font-bold text-xl
  
  p.desc
    @apply font-barlow-semi-condensed
    @apply leading-sm-narrow
    
  @screen c11
    header
      @apply w-full
      @apply pt-2b
    
  @screen c17
    header
      @apply pt-3b

    p.desc
      @apply leading-base-narrow


</style>
