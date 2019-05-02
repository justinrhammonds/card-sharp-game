<template>
  <div class="game-row">
    <!-- TODO Implement for loop once stage advancement is worked out -->
      <row-stage 
        :key="index"
        v-for="(stage, index) in stages"
        :swaps="true ? stage.swaps : undefined" 
        :is-active="true"
        :stage-card="setStageCard(rowCards, index)" 
        @prediction="advanceStageAndEvaluate"
      />
  </div>
</template>

<script>
import stages from '../data/stages.js';
import cards from '../data/cards.js';
import RowStage from './RowStage.vue';
import { constants } from 'crypto';

export default {
  name: "game-row",
  components: {
    RowStage
  },
  data() {
    return {
      stages,
      currentStageIndex: 0,
    }
  },
  computed: {
    nextStageIndex: function() {
      return this.currentStageIndex + 1
    },
    deck: function() {
      for (const card of cards) {
        card.order = Math.random()
      }
      return cards.sort((a,b) => {
        return a.order - b.order
      })
      .slice( 0, 12 ) //don't need more than 12 cards in each game row
    },
    rowCards: function() {
      return this.deal(6);
    },
    drawPile: function() {
      return this.deal(6, 6);
    },
    currentStage: function() {
      return this.stages[currentStageIndex];
    }
  },
  created() {
//
  },
  methods: {
    deal(numberOfCards, fromPosition = 0) {
      console.log('deck:', this.deck);
      return this.deck.slice(fromPosition, numberOfCards)
    },
    drawCard(deckInput) {
      const card = deckInput.shift();
      this.currentStageCardValue = card.value; 
      return card;
    },
    advanceStageAndEvaluate(prediction, previousCardValue) {
      this.currentStageIndex = this.nextStageIndex;
      console.log("advance", this.currentStageIndex)
      this.stages[this.currentStageIndex].card = this.drawCard(this.rowCards)

      if (prediction === "higher") {
        const evaluation = this.currentStageCardValue > previousCardValue;
        console.log("evaluation", previousCardValue, prediction, this.currentStageCardValue, evaluation);
        return evaluation;
      } 
      else {
        const evaluation = this.currentStageCardValue < previousCardValue;
        console.log("evaluation", previousCardValue, prediction, this.currentStageCardValue, evaluation);
        return evaluation;
      }
    },
    setStageCard(rowCards, stageIndex) {
      if(this.currentStageIndex === stageIndex ) {
        console.log(`rowCards: `, rowCards);
        const card = this.drawCard(rowCards);
        console.log(`setStage ${stageIndex} card:`, card); 
        return card;
      } 
      else if (this.currentStageIndex < stageIndex) {
        const card = this.stages[stageIndex].card;
        console.log(`setStage ${stageIndex} card:`, card);
        return card;
      }

    }
  }
}
</script>

<style scoped>



</style>
