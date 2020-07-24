<template lang="pug">
  h1 Uses

  section.header
    p What technologies I use and why.

  section.content.typeset
    :md
      ## Developer Setup

      Last year, I replaced my old MacBook with an iPad Pro, and I am now able to use it for 99% of what I do as a developer. Keeping my local changes synced with cloud repositories has improved my workflow, and the iPad's Liquid Retina / True Tone display is saving my eyesight. Here's my setup:
      
      - __Device:__ [iPad Pro (11-inch)](https://www.apple.com/ipad-pro/specs/) with [Smart Keyboard Folio](https://www.apple.com/smart-keyboard/)
      - __Code editor:__ [Textastic](https://www.textasticapp.com/)
      - __Git client:__ [Working Copy](https://workingcopyapp.com/)
      - __Terminal emulator & Mosh/SSH client:__ [Blink](http://www.blink.sh/)
      - __Remote development server:__ [Digital Ocean Droplet](https://www.digitalocean.com/products/droplets/) running [Ubuntu 18](https://ubuntu.com/server) with [Node.js 12](https://nodejs.org/en/) installed ($5/mo. for 1GB memory / 25 GB SSD)
      - __Git host providers:__ [GitHub](https://github.com/) for public projects, [GitLab](https://about.gitlab.com/) for client work
      - __Browser dev tools for iOS:__ [Inspector](https://apps.apple.com/us/app/inspect-browser/id1203594958) - not perfect, but useful to have
      
      
      ## Code Utilities
      
      Keeping up with the latest trends in Node.js tooling and evaluating alternate packages/frameworks has helped me to be more productive. By selecting a reliable technology stack, I have been able to successfully automate parts of my development workflow. Here are some of the packages I depend upon the most:
      
      ### JS/Node
      
      - __Bundler:__ ~~Webpack~~ (too much configuration, bloated features/ecosystem) ➔ ~~Parcel~~ (not enough configuration, not stable yet) ➔ [Rollup](http://rollupjs.org/guide/en/) - the simplest solution with enough options and plugins for most use cases
      - __Transpiler:__ [Babel](https://babeljs.io/) configured with [preset-env](https://babeljs.io/docs/en/babel-preset-env), [core-js@3](https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md), and "useBuiltIns" option set to ["usage"](https://babeljs.io/docs/en/babel-preset-env#usebuiltins-usage)
      - __Browser targeting:__ [Browserslist](https://github.com/browserslist/browserslist#queries) configured to "> 1% in US, last 1 version, not dead"
      - __Minifier:__ [Terser](https://terser.org/)
      - __Linter:__ [ESLint](https://eslint.org/)
      - __Style guide:__ [Airbnb](https://github.com/airbnb/javascript)
      - __Test runner:__ [AVA](https://github.com/avajs/ava)
      
      ### CSS
      
      - __Pre/post processor:__ ~~Sass~~ ➔ ~~Stylus~~ ➔ [PostCSS](https://postcss.org/)
      - __Syntax:__ ~~Stylus~~ ➔ [SugarSS](https://github.com/postcss/sugarss)
      - __Framework:__ ~~Bootstrap~~ ➔ ~~Bulma~~ ➔ [TailwindCSS](https://tailwindcss.com/) customized with a complete [HSL color system](https://github.com/metamodern-design/color-system) and proportional size/spacing classes
      
      ### HTML
      
      - __Template engine:__ [Pug](https://github.com/pugjs/pug#syntax)
      - __Markdown rendering:__ [Markdown-It](http://markdown-it.github.io/)
      
      
      ## Cloud Services
      
      When possible, I choose to use/buy services from companies that place human values and product excellence above the drive for market domination. Here are a few I've been using for a while:
      
      - __Web hosting:__ [Netlify](https://www.netlify.com/)
      - __Email:__ [Fastmail](https://www.fastmail.com/about/)
      - __Cloud storage:__ [pCloud](https://www.pcloud.com/)
      - __Streaming music:__ [TIDAL](https://tidal.com/)
      
      ## Other Software
      
      These considerations also inform my software uses:
      
      - __Web browser:__ [Firefox](https://www.mozilla.org/en-US/firefox/browsers/) - on all of my devices
      - __Vector illustration:__ [Affinity Designer](https://affinity.serif.com/en-us/designer/ipad/)
      - __Photo editing:__ [Affinity Photo](https://affinity.serif.com/en-us/photo/ipad/)

  section
    :md
      *Check out "uses" pages from a bunch of other developers [here](https://uses.tech/).*

</template>


<style lang="postcss">
  h1
    @apply mb-2b

  section.header
    @apply text-lg-narrow
  
  section.content
    @apply text-sm-narrow
  

  @screen c17
    section.content
      @apply text-base-narrow

</style>
