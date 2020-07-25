<template lang="pug">
  h1 Projects

  section.header
    p What I'm building on my own time.

  section.body
    :md(class='typeset')
      ## FolkDB
      
      I'm currently prototyping a music database with a focus on the folk (or "traditional", or "old-time") music of North America and the British Isles, as this music has been rediscovered and reinterpreted in the recording era. The goal is to aid discovery by linking a variety of resources that are already available online, from streaming audio to digitized print materials to historical and biographical information. I should have something to share publicly in the near future.
    
      ## Design & Color System

      To support my work in front-end development, I have been using [TailwindCSS](https://tailwindcss.com/) to gradually implement a full-fledged design system. Currently, this system includes size and layout classes based on [proportional relationships](https://programmingdesignsystems.com/layout/a-short-history-of-geometric-composition/index.html) and color classes based on the [HSL model](https://en.wikipedia.org/wiki/HSL_and_HSV) and the [12-hue color circle](https://personal.utdallas.edu/~melacy/pages/2D_Design/Itten_ColorContrasts/IttenColorContrasts.html). Visual documentation is available at [system.metamodern.design](https://system.metamodern.design). There is an NPM package for just the [color system](https://www.npmjs.com/package/@metamodern/color-system) and another for the [full design/color system](https://www.npmjs.com/package/@metamodern/design-system). My next step on this project will be to create some prototypes for visual styles and basic UI components that can be reused across projects.
      
      ## CLI Tool for Configuring/Packaging Svelte Apps
      
      I've been trying out [Svelte](https://svelte.dev) for a few months now, and in that time, I've become a total convert. Using Svelte, I am finially writing application code for the web in a way that feels intuitive, succinct, and maintainable. To boost my productivity even further, I created [this utility](https://www.npmjs.com/package/@metamodern/svelte-render) to scaffold build configurations for my Svelte projects. 
      
</template>


<style lang="postcss">
  h1
    @apply mb-2b
  
  section.header
    @apply text-lg-narrow
    
  @screen c17
    section.body
      @apply text-base
      

</style>
