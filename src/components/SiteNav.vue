<template>
  <nav class="site-nav">
    <ul>
      <li class="title"><h1>Card Sharp</h1></li>
      <!-- <li class="nav-1">New Game</li> -->
      <li class="nav-2" @click="showInstructions">How to Play</li> 
    </ul>
    <b-modal 
      id="how-to-play-instructions" 
      size="lg"
      title="Welcome to Card Sharp!"
      hide-header
      hide-footer
      scrollable>
      <how-to-play />
    </b-modal>
  </nav>
</template>

<script>
import HowToPlay from './HowToPlay.vue';

export default {
  name: "site-nav",
  components: {
    HowToPlay
  },
  methods: {
    showInstructions () {
      this.$bvModal.show('how-to-play-instructions');
    },
  }
}
</script>

<style>

.site-nav {
  background-color: #1a1a1a;
  width: 100vw;
}

.site-nav ul {
  display: flex;
  margin: 0;
  padding: 0 2rem;
  justify-content: space-around;
  align-items: center;
}

.nav-1, .nav-2 {
  flex-grow: 1;
  font-size: var(--nav-font-size);
  font-family: var(--graduate);
  padding: 0 var(--nav-font-size);
}

.title {
  color: #ffffffea;
  flex-grow: 2;
  font-family: var(--righteous);
}

</style>
