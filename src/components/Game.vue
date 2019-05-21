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
    <b-modal
      id="game-recap-modal" 
      title="Game Over"
      size="sm"
      hide-header
      hide-footer
      ok-only>
      <game-recap 
        :final-score="finalScore"
        @start-new-game="startNewGame">
      </game-recap>
    </b-modal>
  </div>
</template>

<script>
import GameRow from '../components/GameRow.vue';
import Hud from '../components/Hud.vue';
import GameRecap from '../components/GameRecap.vue';

export default {
  name: "game",
  components: {
    Hud,
    GameRow,
    GameRecap,
  },
  data() {
    return {
      config: {
        score: 100,
        bonusScore: 300,
        swapPenalty: 50,
        tryAdjust: 1,
      },
      finalScore: 0,
      totalScore: 0,
      triesRemaining: 3,
      bonusType: "score",
    }
  },
  methods:{
    recalculateScore(increaseOrDecrease, isSwap = false, isBonus = false) {
      // if on a swap
      if (isSwap && this.totalScore > 0) { // never have less than 0 points
        this.totalScore = this.totalScore + (this.config.swapPenalty * increaseOrDecrease);
      }
      // if on collect bonus
      if (!isSwap && increaseOrDecrease > 0 && this.totalScore >= 0 && isBonus === true) {
        this.totalScore = this.totalScore + (this.config.bonusScore * increaseOrDecrease);
      }
      // else if on correct guess
      else if (!isSwap && increaseOrDecrease > 0 && this.totalScore >= 0) {
        this.totalScore = this.totalScore + (this.config.score * increaseOrDecrease);
      }
    },
    recalculateTries(increaseOrDecrease) {
      if (this.triesRemaining === 0 && increaseOrDecrease < 0) {
        this.finalScore = this.totalScore;
        this.$bvModal.show('game-recap-modal');
        this.startNewGame();
      }
      else {
        this.triesRemaining = this.triesRemaining + (this.config.tryAdjust * increaseOrDecrease);
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
    startNewGame() {
      this.totalScore = 0;
      this.triesRemaining = 3;
      this.bonusType = "score";
    }
  }
}
</script>

<style scoped>

  #game {
    height: 100%;
  }

</style>
