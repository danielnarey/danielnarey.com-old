<style lang="postcss" global>
  @tailwind base
  
  html
    @apply antialiased
    @apply overflow-x-hidden
    @apply overflow-y-scroll
    font-size: 16px
    text-rendering: optimizeLegibility
    
  /* INLINE */
  
  a:not(.unstyled)
    @apply text-medium-blue
  
  .text-white a:not(.unstyled),
  .text-lighter a:not(.unstyled)
    @apply text-bright-green
  
  a:visited:not(.unstyled)
    @apply text-medium-purple
  
  .text-white a:visited:not(.unstyled),
  .text-lighter a:visited:not(.unstyled)
    @apply text-medium-light-red
  
  code
    @apply bg-transparent
    @apply font-source-code-pro
    
  strong
    @apply font-semibold
    
  /* DISPLAY FIX FOR ICONS AND TAGS */
  
  p img,
  span img
    @apply inline
    height: 1em
  
  /* PRE */
  
  pre
    @apply text-xs
  
  
  @screen c17
    pre
      @apply text-sm
      
  /* HEADINGS */
  
  h1:not(.unstyled)
    @apply font-extrabold text-lg-narrow
  
  h2:not(.unstyled)
    @apply font-bold text-base-narrow
  
  h3:not(.unstyled),
  h4:not(.unstyled),
  h5:not(.unstyled),
  h6:not(.unstyled)
    @apply font-semibold text-sm-narrow
  
  
  @screen c17
    h1:not(.unstyled)
      @apply text-xl-narrow
    
    h2:not(.unstyled)
      @apply text-lg-narrow
    
    h3:not(.unstyled),
    h4:not(.unstyled),
    h5:not(.unstyled),
    h6:not(.unstyled)
      @apply text-base-narrow
  
  
  /* BUTTONS */
  
  button
    @apply select-none
    
  button,
  button:hover,
  button:focus,
  button:active
    @apply outline-none
    -webkit-appearance: none
    -moz-appearance: none
  
  
  /* IMAGE SIZING */
  
  div > img,
  figure > img
    @apply w-full
    
  
  /* SPACING FOR CONTENT SECTIONS */
  
  section
    @apply w-full
    @apply pb-2b
  
  
  @screen c17
    section
      @apply pb-3b

</style>
