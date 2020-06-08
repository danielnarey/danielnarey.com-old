<style lang="postcss" global>
  .container
    @apply w-full max-w-10c
    @apply mx-auto
  
  
  @screen c11
    .container
      @apply max-w-full
      @apply mx-0
      @apply pr-1b
      padding-left: 21rem
  
  @screen c17
    .container
      padding-left: calc(50vw - 8rem)
      padding-right: calc(50vw - 32rem)

</style>