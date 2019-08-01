<template>
  <div id="game">
    <hud />
    <game-row
      @award-bonus="awardBonus"
      @adjust-score="recalculateScore"
      @adjust-tries="recalculateTries"
    />
    <modal v-show="gameOver" @close="continueNewGame">
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
import { mapState } from "vuex";

export default {
  name: "game",
  components: {
    Hud,
    GameRow,
    Modal
  },
  data() {
    return {
      gameOver: false,
      finalScore: 0
    };
  },
  computed: {
    ...mapState(["bonusType", "score", "tries", "settings"])
  },
  methods: {
    recalculateScore(increaseOrDecrease, isSwap = false, isBonus = false) {
      // if on a swap (also never have less than 0 points)
      if (isSwap && this.score > 0) {
        this.$store.commit("updateScore", {
          increaseOrDecrease,
          amount: this.settings.swap
        });
      }
      // if on collect bonus
      if (
        !isSwap &&
        increaseOrDecrease > 0 &&
        this.score >= 0 &&
        isBonus === true
      ) {
        this.$store.commit("updateScore", {
          increaseOrDecrease,
          amount: this.settings.scoreBonus
        });
      }
      // else if on correct guess
      else if (!isSwap && increaseOrDecrease > 0 && this.score >= 0) {
        this.$store.commit("updateScore", {
          increaseOrDecrease,
          amount: this.settings.scoreAmount
        });
      }
    },
    recalculateTries(increaseOrDecrease) {
      if (this.tries === 0 && increaseOrDecrease < 0) {
        this.endGameAndRecap();
        this.startNewGame();
      } else {
        //this.tries = this.tries + this.settings.tries * increaseOrDecrease;
        this.$store.commit("updateTries", {
          increaseOrDecrease,
          amount: this.settings.triesAmount
        });
      }
    },
    awardBonus() {
      if (this.bonusType === "score") {
        this.recalculateScore(+1, false, true);
      }
      if (this.bonusType === "tries") {
        this.recalculateTries(+1);
      }
    },
    endGameAndRecap() {
      this.gameOver = true;
      this.finalScore = this.score;
    },
    startNewGame() {
      this.$store.commit("resetGame");
    },
    continueNewGame() {
      this.gameOver = false;
    }
  }
};
</script>

<style scoped>
#game {
  height: 100vh;
  background-color: #299104;
  background-image: url("../assets/45-degree-fabric.png");
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
