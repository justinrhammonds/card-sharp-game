<template>
  <modal v-show="gameEnded" @close="continueNewGame">
    <template v-slot:modal-header>
      <h2 class="recap-title">Game Over</h2>
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
import Modal from "./Modal";
import { mapState, mapActions } from "vuex";

export default {
  name: "game-recap",
  components: {
    Modal
  },
  computed: {
    ...mapState(["gameEnded", "finalScore"])
  },
  methods: {
    ...mapActions(["continueNewGame"])
  }
};
</script>

<style scoped>
.score-title,
.score-content {
  width: 100%;
  display: block;
  text-align: center;
}

.score-title {
  font-size: calc(var(--nav-font-size) * 2.5);
  color: var(--blue);
}

.score-content {
  font-size: calc(var(--nav-font-size) * 4);
}

.recap-title {
  color: mediumvioletred;
}
</style>