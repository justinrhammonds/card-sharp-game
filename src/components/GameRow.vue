<template>
  <div class="game-row">
      <row-stage 
        :key="index"
        v-for="(stage, index) in stages"
        :active-stage-id="currentStageIndex"
        :stage="stage"
        @prediction="advanceStageAndEvaluate"
      />
  </div>
</template>

<script>
import stages from '../data/stages.js';
import cards from '../data/cards.js';
import RowStage from './RowStage.vue';

export default {
  name: "game-row",
  components: {
    RowStage
  },
  data() {
    return {
      cards,
      stages,
      currentStageIndex: 0,
    }
  },
  computed: {
    nextStageIndex: function() {
      return this.currentStageIndex + 1
    },
    currentStage: function() {
      return this.stages[currentStageIndex];
    }
  },
  beforeCreate() {
  },
  created() {
    function shuffle() {
      for (const card of cards) {
        card.order = Math.random()
      }
      cards.sort((a,b) => {
        return a.order - b.order
      });
    }

    function dealStages(cards) {
      for (let i = 0; i < stages.length; i++) {
        stages[i].card = cards[i];
      }
    }

    shuffle();
    //only need a max of 12 cards for a game
    this.cards = this.cards.slice(0, 12);
    dealStages(this.cards);
  },
  mounted() {
  },  
  updated() {
  },
  methods: {
    drawCard(cards, position) {
      const card = cards[position];
      this.currentStageCardValue = card.value; 
      return card;
    },
    advanceStageAndEvaluate(prediction, previousCardValue) {
      this.currentStageIndex = this.nextStageIndex;
      this.stages[this.currentStageIndex].card = this.drawCard(this.cards, this.currentStageIndex)
      let evaluation;
      if (prediction === "higher") {
      evaluation = this.currentStageCardValue > previousCardValue;
      } 
      else {
        evaluation = this.currentStageCardValue < previousCardValue;
      }
      console.log('EvaluatePrediction :', evaluation);
      return evaluation;
    },
    drawNewCardFromPile() {
      // TODO drawCard from cards at position equal to stages length + number of previously drawn cards => 6 to begin with
    },
    determineIsActive(stageIndex) {
      return this.currentStageIndex === stageIndex
    }
  }
}
</script>

<style scoped>



</style>
