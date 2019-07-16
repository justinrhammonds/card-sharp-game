<template>
  <div id="game">
    <hud
      :score="totalScore"
      :tries="triesRemaining"
      @bonus-toggle="calibrateBonusType"
    />
    <game-row 
      @award-bonus="awardBonus"
      @adjust-score="recalculateScore"
      @adjust-tries="recalculateTries"
    />
    <modal v-show="gameOver"
      @close="closeGameRecap"
      @start-new-game="startNewGame">
      <template v-slot:modal-header>
        <h1 class="m-header-title">Game Over</h1>
      </template>
      <template v-slot:modal-body>
        <div class="m-content">
          <div class="score-title">Final Score</div>
          <div class="score-display">{{finalScore}}</div>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>

import Hud from '../components/Hud.vue';
import GameRow from '../components/GameRow.vue';
import Modal from '../components/Modal.vue';
import gameConfig from '../data/game-config.js';

export default {
  name: "game",
  components: {
    Hud,
    GameRow,
    Modal
  },
  data() {
    return {
      gameConfig,
      gameOver: false,
      finalScore: 0,
      totalScore: 0,
      triesRemaining: this.gameConfig.startingTries,
      bonusType: "score",
    }
  },
  methods:{
    recalculateScore(increaseOrDecrease, isSwap = false, isBonus = false) {
      // if on a swap
      if (isSwap && this.totalScore > 0) { // never have less than 0 points
        this.totalScore = this.totalScore + (this.gameConfig.swapPenalty * increaseOrDecrease);
      }
      // if on collect bonus
      if (!isSwap && increaseOrDecrease > 0 && this.totalScore >= 0 && isBonus === true) {
        this.totalScore = this.totalScore + (this.gameConfig.bonusScore * increaseOrDecrease);
      }
      // else if on correct guess
      else if (!isSwap && increaseOrDecrease > 0 && this.totalScore >= 0) {
        this.totalScore = this.totalScore + (this.gameConfig.score * increaseOrDecrease);
      }
    },
    recalculateTries(increaseOrDecrease) {
      if (this.triesRemaining === 0 && increaseOrDecrease < 0) {
        this.endGame();
        this.startNewGame();
      }
      else {
        this.triesRemaining = this.triesRemaining + (this.gameConfig.tryAdjust * increaseOrDecrease);
      }
    },
    calibrateBonusType(bonusType) {
      this.bonusType = bonusType;
    },
    awardBonus() {
      if (this.bonusType === "score") {
        this.recalculateScore(+1, false, true);
      }
      else {
        this.recalculateTries(+1);
      }
    },
    endGame() {
      this.showGameRecap();
      this.finalScore = this.totalScore;
    },
    startNewGame() {
      this.totalScore = this.gameConfig.startingScore;
      this.triesRemaining = this.gameConfig.startingTries;
    },
    showGameRecap() {
      this.gameOver = true;
    },
    closeGameRecap() {
      this.gameOver = false;
    }
  }
}

</script>

<style scoped>

  #game {
    height: 100vh;
    background-color: #299104;
    background-image: url('../assets/45-degree-fabric.png');
    background-repeat: repeat; 
  }

  .score-title, .score-display {
    font-size: calc(var(--large-font-size) * 2.5);
    width: 100%;
    display: block;
    text-align: center;
  }

  .score-title {
    color: #007bff;
  }

  .score-display {
    font-size: calc(var(--large-font-size) * 4);
  }

  .m-header-title {
    color: mediumvioletred;
  }

</style>
