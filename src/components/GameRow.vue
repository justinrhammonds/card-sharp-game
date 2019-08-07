<template>
  <div class="game-row">
    <div class="row-container">
      <row-stage :key="index" v-for="(stage, index) in stages" :row-stage="stage">
        <game-controls
          @prediction="advanceStageAndEvaluate"
          @collect-bonus="awardBonus"
          @swap="swapCard"
        />
      </row-stage>
    </div>
  </div>
</template>

<script>
import RowStage from "./RowStage.vue";
import GameControls from "./GameControls.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "game-row",
  components: {
    RowStage,
    GameControls
  },
  computed: {
    ...mapState(["stages", "activeStageIndex"]),
    ...mapGetters(["currentStage", "isBonusStage"])
  },
  methods: {
    ...mapActions([
      "swapCard",
      "swapJokerCard",
      "awardBonus",
      "shuffleAndDeal"
    ]),
    advanceStageAndEvaluate(prediction) {
      const previousCardValue = this.stages[this.activeStageIndex].card.value;
      // advance stage
      this.$store.commit("setActiveStageIndex", {
        amount: this.activeStageIndex + 1
      });

      this.evaluatePrediction(prediction, previousCardValue, this.currentStage);
    },
    evaluatePrediction(prediction, prevValue, currentStage) {
      if (prediction === "higher") {
        currentStage.evaluation =
          currentStage.card.value > prevValue || currentStage.card.value === 0; // joker should always evaluate to true prediction
      } else {
        currentStage.evaluation =
          currentStage.card.value < prevValue || currentStage.card.value === 0; // joker should always evaluate to true prediction
      }

      // if not bonus stage, prediction was correct, and wasn't joker, award points
      if (
        !this.isBonusStage(this.currentStage.id) &&
        currentStage.evaluation &&
        currentStage.card.value !== 0
      ) {
        this.$store.dispatch("recalculateScore", {
          increaseOrDecrease: +1,
          isSwap: false,
          isBonus: false
        });
      }

      // if not bonus stage, and prediction was incorrect, lose a try and reset rows
      if (
        !this.isBonusStage(this.currentStage.id) &&
        !currentStage.evaluation
      ) {
        this.$store.dispatch("recalculateTries", { increaseOrDecrease: -1 });
        this.$store.dispatch("flipTable", { delay: 1000 });
      }

      // if bonus stage, and prediction was incorrect, reset rows
      if (this.isBonusStage(this.currentStage.id) && !currentStage.evaluation) {
        this.$store.dispatch("flipTable", { delay: 1000 });
      }
    }
  },
  created() {
    this.shuffleAndDeal();
  }
};
</script>

<style scoped>
.row-container {
  display: flex;
  justify-content: space-evenly;
  padding-top: 10vh;
}
</style>
