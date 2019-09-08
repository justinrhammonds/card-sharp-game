<template>
  <section class="home-page">
    <p>
      Card Sharp Solo is a card game based on the classic TV game show
      <a target="_blank" href="https://en.wikipedia.org/wiki/Card_Sharks">Card Sharks</a>. The basic premise of the game is to guess whether the next card in a row, once revealed, will be higher or lower than the previous card. Guess correctly and you earn points as you progress through the row. Guess incorrectly and you start over from the beginning of a new row. The TV version pits two contestants against one another with the goal of being the first to complete the row. Unlike in the TV version, Card Sharp Solo is played by one person with the goal of achieving a high score until there are no attempts remaining. I hope you enjoy the game!
    </p>
    <p>
      This web application is for
      <em>demo purposes</em> only, and was developed using the
      <a target="_blank" href="https://vuejs.org/">VueJS framework</a>. The application code is open source and available to view on
      <a target="_blank" href="https://github.com/justinrhammonds/card-sharp-game">GitHub</a>.
    </p>
    <router-link tag="div" class="menu-button" to="/tutorial">View Tutorial</router-link>
    <router-link tag="div" class="menu-button" to="/play" go>Start New Game</router-link>
  </section>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.home-page {
  color: white;
  padding: 2rem;
}

.menu-button {
  background-color: #4aef34d9;
  color: white;
  text-decoration: none;
  padding: 1rem;
  margin: calc(var(--nav-font-size) * 2) var(--nav-font-size) 0 0;
  font-size: var(--nav-font-size);
  display: inline-block;
  border: 5px solid white;
  box-shadow: 0 5px 8px 0 black, 0 7px 20px 0 black;
}

.menu-button:hover {
  background-color: #4aef34;
  cursor: pointer;
}
</style>
