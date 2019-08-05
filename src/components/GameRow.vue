<template>
  <div class="game-row">
    <div class="row-container">
      <row-stage
        ref="renderedStages"
        :key="index"
        v-for="(stage, index) in stages"
        :active-stage-id="activeStageIndex"
        :row-stage="stage"
        :swappedCard="swappedCard"
      >
        <game-controls
          @prediction="advanceStageAndEvaluate"
          @collect-bonus="collectBonus"
          @collect-joker-bonus="collectJokerBonusAndSwap"
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
    ...mapGetters(["getCard"]),
    currentStage: function() {
      return this.stages[this.activeStageIndex];
    }
  },
  methods: {
    swapCard() {
      this.currentStage.card = this.getCard(this.swapCardIndex);
      this.swappedCard = this.currentStage.card; /////////////////////////
      this.$store.commit("setSwapCardIndex", {
        amount: this.swapCardIndex + 1
      });
      this.currentStage.swaps = this.currentStage.swaps - 1; ///////////////////////////////////
      this.$store.dispatch("recalculateScore", {
        increaseOrDecrease: -1,
        isSwap: true,
        isBonus: false
      });
    },
    swapJokerCard() {
      this.currentStage.card = this.getCard(this.swapCardIndex);
      this.swappedCard = this.currentStage.card; //////////////////////////////////////////////
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
        currentStage.evaluation =
          currentStage.card.value > prevValue ||
          // joker should always evaluate to true prediction
          currentStage.card.value === 0;
      } else {
        currentStage.evaluation =
          currentStage.card.value < prevValue ||
          // joker should always evaluate to true prediction
          currentStage.card.value === 0;
      }

      // if not bonus round, prediction was correct, and wasn't joker, award points
      if (
        currentStage.name !== "bonus" &&
        currentStage.evaluation &&
        currentStage.card.value !== 0
      ) {
        this.$store.dispatch("recalculateScore", {
          increaseOrDecrease: +1,
          isSwap: false,
          isBonus: false
        });
      }

      // if not bonus round, and prediction was incorrect, lose a try and reset rows
      if (currentStage.name !== "bonus" && !currentStage.evaluation) {
        this.$store.dispatch("recalculateTries", { increaseOrDecrease: -1 });
        this.$store.dispatch("flipTable", { delay: 1000 });
      }

      // if bonus round, and prediction was incorrect, reset rows
      if (currentStage.name === "bonus" && !currentStage.evaluation) {
        this.$store.dispatch("flipTable", { delay: 1000 });
      }

      return currentStage.evaluation;
    },
    collectBonus() {
      this.$store.dispatch("awardBonus");
      this.$store.dispatch("flipTable", { delay: 0 });
    },
    collectJokerBonusAndSwap() {
      this.$store.dispatch("awardBonus");
      this.swapJokerCard();
    }
  },
  created() {
    this.$store.dispatch("deal");
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
