<template>
  <div id="app">
    <nav class="main-nav">
      <ul>
        <li class="title"><h1>Card Sharp</h1></li>
        <li class="nav-1">New Game</li>
        <li class="nav-2">How to Play</li>
      </ul>
    </nav>
    <game />
  </div>
</template>

<script>
import Game from './components/Game.vue';

export default {
  name: 'app',
  components: {
    Game
  },
}

</script>

<style>

nav ul, nav li {
  display: inline-block;
}

nav li {
  list-style-type: none;
}

.main-nav {
  background-color: #1a1a1a;
  width: 100vw;
}

.main-nav ul {
  display: grid;
  grid-template: "title nav-1 nav-2" auto / 50% 25% 25%; 
  margin: 0 auto;
  padding: 0 0 0 1rem;
  place-items: center start;
}

.nav-1, .nav-2 {
  display: inline-block;
  font-family: var(--graduate);
}

.title {
  color: #ffffffea;
  display: inline-block;
  font-family: var(--righteous);
  grid-column-start: title;
}

.nav-1 {
  grid-column-start: nav-1;
}

.nav-2 {
  grid-column-start: nav-2;
}

</style>
