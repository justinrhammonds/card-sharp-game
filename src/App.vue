<template>
  <div id="app">
    <site-nav />
    <transition
      name="page-fade"
      mode="out-in">
      <router-view />
    </transition>

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

  .page-fade-enter-active,
  .page-fade-leave-active {
    transition-duration: 0.25s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .page-fade-enter,
  .page-fade-leave-active {
    opacity: 0
  }

</style>
