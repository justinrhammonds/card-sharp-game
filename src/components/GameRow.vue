<template>
  <div class="game-row">
    <div class="row-container">
      <row-stage
        ref="renderedStages"
        :key="index"
        v-for="(stage, index) in stages"
        :row-stage="stage"
        :swappedCard="swappedCard"
      >
        <game-controls
          @prediction="advanceStageAndEvaluate"
          @collect-bonus="collectBonus"
          :stage="currentStage"
          @swap="swapCard"
        />
      </row-stage>
    </div>
  </div>
</template>

<script>
import RowStage from "./RowStage.vue";
import GameControls from "./GameControls.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "game-row",
  components: {
    RowStage,
    GameControls
  },
  data() {
    return {
      swappedCard: null
    };
  },
  computed: {
    ...mapState(["cards", "stages", "swapCardIndex", "activeStageIndex"]),
    ...mapGetters(["getCard", "currentStage", "isBonusStage"])
  },
  methods: {
    swapCard() {
      this.$store.commit("setStageCard", {
        stageId: this.currentStage.id,
        card: this.getCard(this.swapCardIndex)
      });
      this.swappedCard = this.currentStage.card; /////////////////////
      this.$store.commit("setSwapCardIndex", {
        amount: this.swapCardIndex + 1
      });
      this.currentStage.swaps = this.currentStage.swaps - 1; /////////////////////
      this.$store.dispatch("recalculateScore", {
        increaseOrDecrease: -1,
        isSwap: true,
        isBonus: false
      });
    },
    swapJokerCard() {
      this.$store.commit("setStageCard", {
        stageId: this.currentStage.id,
        card: this.getCard(this.swapCardIndex)
      });
      this.swappedCard = this.currentStage.card; ////////////////////////////////////
      this.$store.commit("setSwapCardIndex", {
        amount: this.swapCardIndex + 1
      });
    },
    // TODO - refactor this into simpler, one-purpose methods
    advanceStageAndEvaluate(prediction) {
      const previousCardValue = this.stages[this.activeStageIndex].card.value;
      // advance stage
      this.$store.commit("setActiveStageIndex", {
        amount: this.activeStageIndex + 1
      });
      const currentStage = this.stages[this.activeStageIndex];
      currentStage.card = this.getCard(this.activeStageIndex);

      return this.evaluatePrediction(
        prediction,
        previousCardValue,
        currentStage
      );
    },
    evaluatePrediction(prediction, prevValue, currentStage) {
      if (prediction === "higher") {
        currentStage.evaluation = ///////////////////////////////////////////
          currentStage.card.value > prevValue ||
          // joker should always evaluate to true prediction
          currentStage.card.value === 0;
      } else {
        currentStage.evaluation =
          currentStage.card.value < prevValue || /////////////////////////////
          // joker should always evaluate to true prediction
          currentStage.card.value === 0;
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

      return currentStage.evaluation;
    },
    collectBonus() {
      this.$store.dispatch("awardBonus");
      if (this.isBonusStage(this.currentStage.id)) {
        this.$store.dispatch("flipTable", { delay: 0 });
      } else {
        this.swapJokerCard();
      }
    }
  },
  created() {
    this.$store.dispatch("shuffleAndDeal");
  },
  updated() {
    this.swappedCard = null;
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
