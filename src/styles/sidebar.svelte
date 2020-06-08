<style lang="postcss" global>
  .sidebar
    @apply w-full
  
  
  @screen c11
    .sidebar
      @apply w-5c
      @apply fixed h-screen overflow-y-scroll
  
  @screen c17
    .sidebar
      width: calc(50vw - 10rem)
      padding-left: calc(50vw - 32rem)
      padding-right: 1rem

</style>