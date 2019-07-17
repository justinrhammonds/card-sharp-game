<template>
  <div class="game-row">
    <div class="row-container">
      <row-stage
        ref="renderedStages"
        :key="index"
        v-for="(stage, index) in stages"
        :active-stage-id="currentStageIndex"
        :row-stage="stage"
        :swappedCard="swappedCard">
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

import stages from '../data/stages.js';
import cards from '../data/cards.js';
import RowStage from './RowStage.vue';
import GameControls from './GameControls.vue';

export default {
  name: "game-row",
  components: {
    RowStage,
    GameControls
  },
  data() {
    return {
      cards,
      stages,
      currentStageIndex: 0,
      swapCardIndex: 6,
      swappedCard: null,
    }
  },
  computed: {
    currentStage: function() {
      return this.stages[this.currentStageIndex];
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
        this.currentStageIndex = 0;
        this.swapCardIndex = 6;
        this.cards = cards;
        this.resetStages();
        this.shuffle();
        this.cards = this.cards.slice(0, 12);
        this.dealStages(this.cards);
      })
    },
    // TODO - find a better way to do this.
    resetStages() {
      for (let i = 0; i < 4; i += 1) {
        this.stages[i].swaps = 1;
        this.stages[i].evaluation = null;
      }
    },
    shuffle() {
      for (const card of cards) {
        card.order = Math.random();
      }
      cards.sort((a, b) => {
        return a.order - b.order;
      });
    },
    dealStages(cards) {
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
      this.swapCardIndex = this.swapCardIndex + 1; 
      this.currentStage.swaps = this.currentStage.swaps - 1;
      this.$emit("adjust-score", -1, true);
    },
    swapJokerCard() {
      this.currentStage.card = this.cards[this.swapCardIndex];
      this.swappedCard = this.currentStage.card;
      this.swapCardIndex = this.swapCardIndex + 1; 
    },
    // TODO - refactor this into simpler, one-purpose methods
    advanceStageAndEvaluate(prediction) {
      const previousCardValue = this.stages[this.currentStageIndex].card.value;
      // advance stage
      this.currentStageIndex = this.currentStageIndex + 1;
      const currentStage = this.stages[this.currentStageIndex];
      currentStage.card = this.drawCard(this.cards, this.currentStageIndex);

      return this.evaluatePrediction(prediction, previousCardValue, currentStage);
    },
    evaluatePrediction(prediction, prevValue, currentStage) {
      if (prediction === "higher") {
        currentStage.evaluation = currentStage.card.value > prevValue || 
        // joker should always evaluate to true prediction
        currentValue === 0;
      } 
      else {
        currentStage.evaluation = currentStage.card.value < prevValue || 
        // joker should always evaluate to true prediction
        currentStage.card.value === 0;
      }

      // if not bonus round, prediction was correct, and wasn't joker, award points
      if (currentStage.name !== "bonus" && currentStage.evaluation && currentStage.card.value !== 0) {
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
      this.$emit("award-bonus");
      this.flipTable();
    },
    collectJokerBonusAndSwap() {
      this.$emit("award-bonus");
      this.swapJokerCard();
    }
  },
  created() {
    this.shuffle();
    //only need a max of 12 cards for a game
    this.cards = this.cards.slice(0, 12);
    this.dealStages(this.cards);
  },
  updated() {
    this.swappedCard = null;
  }
}

</script>

<style scoped>

  .row-container {
    display: flex;
    justify-content: space-evenly;
    padding-top: 10vh;
  }

</style>
