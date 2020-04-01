<script>
  import { Router, Route } from 'svero';

  import About from './About/About.svelte';
  import Projects from './Projects/Projects.svelte';
  import Uses from './Uses/Uses.svelte';
  import Now from './Now/Now.svelte';

</script>

<template lang="pug">
  Router
    Route(path='/' component='{About}')
    Route(path='/projects' component='{Projects}')
    Route(path='/uses' component='{Uses}')
    Route(path='/now' component='{Now}')
    Route(path='*' redirect='/')
    
</template>
