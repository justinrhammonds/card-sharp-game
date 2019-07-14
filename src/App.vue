<template>
  <div id="app">
    <site-nav />
    <router-view />
  </div>
</template>

<script>
import SiteNav from './components/SiteNav.vue';

export default {
  name: 'app',
  components: {
    SiteNav
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
