<template>
  <div class="game-recap-modal">
    <h2>Game Over</h2>
    <h3>Final Score</h3>
    <div class="final-score">{{finalScore}}</div>
    <b-button class="button-text" @click="$bvModal.hide('game-recap-modal')">Keep Trying</b-button> 
  </div>
</template>

<script>
export default {
  name: "game-recap-modal",
  props: {
    finalScore: {
      type: Number
    },
  },
}
</script>

<style>

  .game-recap-modal {
    color: black;
  }

  .game-recap-modal h2 {
    font-family: var(--righteous);
  }

  .game-recap-modal h3 {
    color: #22a9a9;
    font-weight: 600;
  }

  .final-score {
    width: 100%;
    text-align: center;
    font-size: calc(30px + (42 - 24) * (100vw - 400px) / (1600 - 400));
    font-weight: 600;
  }

  .game-recap-modal button {
    background-color: #22a9a9;
    font-weight: 600;
    float: right;
    margin-top: 20px;
    border: none;
  }

  .game-recap-modal button:hover,
  /* overriding boostrap's style here */
  .game-recap-modal button:not(:disabled):not(.disabled):active {
    background-color: #1e7e7e;
    border: none;
  }

  .button-text {
    text-transform: uppercase;
  }

</style>