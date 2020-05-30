<template lang="pug">
  footer.circuit-board
    .container
      :markdown(tag='section')
        Built with Svelte and [Metamodern Design's](https://github.com/metamodern-design) open-source stack

        ©2020 Daniel C. Narey

</template>


<style lang="postcss">
  footer
    @apply w-screen min-h-7c
    @apply pt-2b
    @apply bg-darker-blue
    @apply text-white text-sm leading-sm
  
  section
    @apply text-center


  @screen c17
    footer
      @apply pt-3b

</style>
