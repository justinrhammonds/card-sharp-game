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
import stages from "../data/stages.js";
import RowStage from "./RowStage.vue";
import GameControls from "./GameControls.vue";
import { mapState } from "vuex";

export default {
  name: "game-row",
  components: {
    RowStage,
    GameControls
  },
  data() {
    return {
      stages, //////////////////////////////////////////////////////////////////
      swappedCard: null
    };
  },
  computed: {
    ...mapState(["cards", "swapCardIndex", "activeStageIndex"]),
    currentStage: function() {
      ////////////////////////////////////////////////
      return this.stages[this.activeStageIndex];
    }
  },
  methods: {
    flipTable() {
      /* 
      I used this.$nextTick().then()... because I
      needed to force waiting for a new UI cycle to
      avoid the side effect of 'not rerendering' the 
      stage 0 card in the view
      */
      this.$nextTick().then(() => {
        this.$store.commit("setActiveStageIndex", {
          amount: 0
        });
        this.$store.commit("setSwapCardIndex", {
          amount: 6
        });
        this.resetStages();
        this.$store.commit("shuffleCards");
        this.dealStages(this.cards);
      });
    },
    // TODO - find a better way to do this.
    resetStages() {
      //////////////////////////////////////////////////////////////
      for (let i = 0; i < 4; i += 1) {
        this.stages[i].swaps = 1;
        this.stages[i].evaluation = null;
      }
    },
    dealStages(cards) {
      ///////////////////////////////////////////////////////////
      for (let i = 0; i < stages.length; i += 1) {
        stages[i].card = cards[i];
      }
    },
    drawCard(cards, position) {
      return cards[position];
    },
    swapCard() {
      this.currentStage.card = this.cards[this.swapCardIndex];
      this.swappedCard = this.currentStage.card;
      this.$store.commit("setSwapCardIndex", {
        amount: this.swapCardIndex + 1
      });
      this.currentStage.swaps = this.currentStage.swaps - 1; ///////////////////////////
      this.$emit("adjust-score", -1, true);
    },
    swapJokerCard() {
      this.currentStage.card = this.cards[this.swapCardIndex];
      this.swappedCard = this.currentStage.card;
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
      currentStage.card = this.drawCard(this.cards, this.activeStageIndex);

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
        this.$emit("adjust-score", +1);
      }

      // if not bonus round, and prediction was incorrect, lose a try and reset rows
      if (currentStage.name !== "bonus" && !currentStage.evaluation) {
        this.$emit("adjust-tries", -1);
        setTimeout(this.flipTable, 1000);
      }

      // if bonus round, and prediction was incorrect, reset rows
      if (currentStage.name === "bonus" && !currentStage.evaluation) {
        setTimeout(this.flipTable, 1000);
      }

      return currentStage.evaluation;
    },
    collectBonus() {
      this.$store.dispatch("awardBonus");
      this.flipTable();
    },
    collectJokerBonusAndSwap() {
      this.$store.dispatch("awardBonus");
      this.swapJokerCard();
    }
  },
  created() {
    this.$store.commit("shuffleCards");
    this.dealStages(this.cards);
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
