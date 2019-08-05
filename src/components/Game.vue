<template>
  <div id="game">
    <hud />
    <game-row />
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
  </div>
</template>

<script>
import Hud from "../components/Hud.vue";
import GameRow from "../components/GameRow.vue";
import Modal from "../components/Modal.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "game",
  components: {
    Hud,
    GameRow,
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
#game {
  height: 100vh;
  background-color: #299104;
  background-image: url("/img/45-degree-fabric.png");
  background-repeat: repeat;
}

.score-title,
.score-content {
  width: 100%;
  display: block;
  text-align: center;
}

.score-title {
  font-size: calc(var(--large-font-size) * 2.5);
  color: var(--blue);
}

.score-content {
  font-size: calc(var(--large-font-size) * 4);
}

.recap-title {
  color: mediumvioletred;
}
</style>
