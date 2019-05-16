<template>
  <div id="app">
    <site-nav />
    <game />
  </div>
</template>

<script>
import Game from './components/Game.vue';
import SiteNav from './components/SiteNav.vue';

export default {
  name: 'app',
  components: {
    SiteNav,
    Game
  },
}

</script>

<style>

  #app {
    display: flex;
    flex-flow: column;
    height: 100vh;
  }

</style>
