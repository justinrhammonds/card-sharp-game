<template>
  <div class="game-row">
    <div class="row-container">
      <row-stage 
        :key="index"
        v-for="(stage, index) in stages"
        :active-stage-id="currentStageIndex"
        :row-stage="stage"
        :swappedCard="swappedCard"
      />
    </div>  
    <game-controls 
      @prediction="advanceStageAndEvaluate"
      @collect-bonus="collectBonus"
      :stage="currentStage"
      @swap="swapCard"
    />
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
      previousCardValue: null,
      totalCardsSwapped: 0,
      currentStageCardValue: null,
      swappedCard: null,
    }
  },
  computed: {
    nextStageIndex: function() {
      return this.currentStageIndex + 1;
    },
    currentStage: function() {
      return this.stages[this.currentStageIndex];
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
        this.resetStages();
        this.cards = cards;
        this.shuffle();
        this.totalCardsSwapped = 0;
        this.cards = this.cards.slice(0, 12);
        this.dealStages(this.cards);
      })
    },
    // TODO - find a better way to do this.
    resetStages() {
      for (let i = 0; i < 4; i += 1) {
        this.stages[i].swaps = 1;
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
      const card = cards[position];
      this.currentStageCardValue = card.value;
      return card;
    },
    swapCard() {
      const swapPosition = 6 + this.totalCardsSwapped;
      this.currentStage.card = this.cards[swapPosition];
      this.swappedCard = this.currentStage.card;
      this.totalCardsSwapped = this.totalCardsSwapped + 1; 
      this.currentStage.swaps = this.currentStage.swaps - 1;
      this.$emit("adjust-score", -1, true);
    },
    advanceStageAndEvaluate(prediction) {
      const previousCardValue = this.stages[this.currentStageIndex].card.value;
      this.currentStageIndex = this.nextStageIndex;
      this.stages[this.currentStageIndex].card = this.drawCard(this.cards, this.currentStageIndex)
      let evaluation;
      if (prediction === "higher") {
        evaluation = this.currentStageCardValue > previousCardValue;
      } 
      else {
        evaluation = this.currentStageCardValue < previousCardValue;
      }
      // if not bonus round, and prediction was correct, award points
      if (this.stages[this.currentStageIndex].name !== "bonus" && evaluation) {
        this.$emit("adjust-score", +1);
      }

      // if not bonus round, and prediction was incorrect, lose a try and reset rows
      if (this.stages[this.currentStageIndex].name !== "bonus" && !evaluation) {
        this.$emit("adjust-tries", -1);
        setTimeout(this.flipTable, 1000);
      }

      // if bonus round, and prediction was incorrect, reset rows
      if (this.stages[this.currentStageIndex].name === "bonus" && !evaluation) {
        setTimeout(this.flipTable, 1000);
      }
      
      this.stages[this.currentStageIndex].evaluation = evaluation;
      return evaluation;
    },
    collectBonus() {
      this.$emit("award-bonus");
      this.flipTable();
    }
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
