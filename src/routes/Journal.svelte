<template lang="pug">
  h1 Journal
    
  section.typeset
    :md(class='hello')
      Hi, I'm Daniel. ![Waving hand emoji](/1F44B.svg)
    
    :md(class='header')
      I'm going to be using this space to develop some ideas about programming and design patterns for the modern web. If you'd like to get in touch, you can find my current contact information on my [GitHub profile](https://github.com/danielnarey).
  
  section
    #posts

</template>


<style lang="sugarss">
  h1
    @apply mb-2b

  .hello
    @apply mb-1b
    @apply text-xl-narrow
  
  .header
    @apply text-base-narrow
    
  @screen c17
    .header
      @apply text-lg-narrow

</style>
