<style lang="postcss" global>
  .container
    @apply w-full max-w-17c
    @apply px-1b
  
  @screen c11
    .container
      @apply pr-2b
      padding-left: 18rem

  @screen c17
    .container
      @apply max-w-17c
      @apply pr-1b
      padding-left: 23rem
      
  @screen c21
    .container
      @apply max-w-19c
      padding-left: 31rem
  
  @media print
    .container
      @apply max-w-full
      @apply m-0
      @apply p-0
      
</style>
