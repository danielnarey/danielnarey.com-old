<style lang="postcss" global>
  @tailwind base
  
  html
    @apply antialiased
    @apply overflow-x-hidden
    @apply overflow-y-scroll
    font-size: 16px
    text-rendering: optimizeLegibility

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
    
  /* INLINE */
  
  strong
    @apply font-semibold

  code
    @apply bg-transparent
    @apply font-source-code-pro
  
  a:not(.unstyled):not(.button)
    @apply text-medium-blue
  
  .text-white a:not(.unstyled):not(.button),
  .text-near-white a:not(.unstyled):not(.button),
  .text-lighter a:not(.unstyled):not(.button),
  .text-light a:not(.unstyled):not(.button)
    @apply text-bright-green
  
  a:visited:not(.unstyled):not(.button)
    @apply text-medium-purple
  
  .text-white a:visited:not(.unstyled):not(.button),
  .text-near-white a:visited:not(.unstyled):not(.button),
  .text-lighter a:visited:not(.unstyled):not(.button),
  .text-light a:visited:not(.unstyled):not(.button),
    @apply text-medium-light-red    
  
  /* BUTTONS */
  
  a.button
    @apply block
  
  button,
  a.button
    @apply select-none
    
  button,
  button:hover,
  button:focus,
  button:active
    @apply outline-none
    -webkit-appearance: none
    -moz-appearance: none

  /* PRE */
  
  pre
    @apply text-xs
  
  @screen c17
    pre
      @apply text-sm
    
  /* DISPLAY FIX FOR ICONS AND TAGS */
  
  p img,
  span img
    @apply inline
    height: 1em
  
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
