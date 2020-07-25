<template lang="pug">
  section.typeset
    :md(class='hello')
      Hi, I'm Daniel. ![Waving hand emoji](/1F44B.svg)
    
    :md(class='header')
      I'm using this space to develop some ideas about programming and design patterns for the modern web.  
      
      The site itself also demos some of the frameworks and techniques I am using to create high-performance web applications with an automated build pipeline and a maintable content layer. The source code lives in [this repo](https://github.com/danielnarey/danielnarey.com). 
      
      I'm currently seeking remote work in a JavaScript-centric full-stack role. If you'd like to get in touch, you can find my current contact information on my [GitHub profile](https://github.com/danielnarey).
      
  section.typeset
    h2 Journal

</template>


<style lang="postcss">
  .hello
    @apply mb-1b
    @apply text-xl-narrow
  
  .header
    @apply text-base

</style>
