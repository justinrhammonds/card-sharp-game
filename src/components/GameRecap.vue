<template>
  <modal>
  <template v-slot:modal-header>
    <h1 class="recap-title">Game Over</h1>
  </template>
  <template v-slot:modal-body>
    <div class="recap-content">
      <div class="score-title">Final Score</div>
      <div class="score-content">{{finalScore}}</div>
    </div>
  </template>
</modal>
</template>

<script>
import Modal from "../components/Modal"

export default {
  name: "game-recap",
  components: {
    Modal
  },
  props: {
    finalScore: {
      type: Number,
      default: 0
    }
  }
}

</script>

<style scoped>

  .score-title, .score-content {
    font-size: calc(var(--large-font-size) * 2.5);
    width: 100%;
    display: block;
    text-align: center;
  }

  .score-title {
    color: #007bff;
  }

  .score-content {
    font-size: calc(var(--large-font-size) * 4);
  }

  .recap-title {
    color: mediumvioletred;
  }

.recap-content {
  font-family: var(--monoton);
}

</style>
