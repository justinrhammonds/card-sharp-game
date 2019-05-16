<template>
  <div class="game-row">
    <div class="row-container">
      <row-stage 
        :key="index"
        v-for="(stage, index) in stages"
        :active-stage-id="currentStageIndex"
        :stage="stage"
        @prediction="advanceStageAndEvaluate"
      />
    </div>  
    <game-controls 
      @prediction="advanceStageAndEvaluate"
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
    }
  },
  computed: {
    nextStageIndex: function() {
      return this.currentStageIndex + 1;
    },
    currentStage: function() {
      return this.stages[currentStageIndex];
    }
  },
  beforeCreate() {
  },
  created() {
    this.shuffle();
    //only need a max of 12 cards for a game
    this.cards = this.cards.slice(0, 12);
    this.dealStages(this.cards);
  },
  mounted() {
  },  
  updated() {
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
        this.cards = cards;
        this.shuffle();
        this.cards = this.cards.slice(0,12);
        this.dealStages(this.cards);
      })
    },
    shuffle() {
      for (const card of cards) {
        card.order = Math.random()
      }
      cards.sort((a,b) => {
        return a.order - b.order;
      });
    },
    dealStages(cards) {
      console.log('Starting new game...');
      for (let i = 0; i < stages.length; i += 1) {
        stages[i].card = cards[i];
      }
    },
    drawCard(cards, position) {
      const card = cards[position];
      this.currentStageCardValue = card.value; 
      return card;
    },
    advanceStageAndEvaluate(prediction) {
      const previousCardValue = this.stages[this.currentStageIndex].card.value;
      console.log('prevCardValue :', this.previousCardValue);
      this.currentStageIndex = this.nextStageIndex;
      this.stages[this.currentStageIndex].card = this.drawCard(this.cards, this.currentStageIndex)
      let evaluation;
      if (prediction === "higher") {
        evaluation = this.currentStageCardValue > previousCardValue;
      } 
      else {
        evaluation = this.currentStageCardValue < previousCardValue;
      }
      if (evaluation) console.log('You guessed right!');
      if (!evaluation) console.log('You guessed wrong!');
      if (!evaluation) this.flipTable();
      if (this.stages[this.currentStageIndex].name === "bonus") {
        if (evaluation) console.log('You win a BONUS!');
        this.flipTable();
      }
      return evaluation;
    },
    isNextStage() {
      return "highlight";
    },
    drawNewCardFromPile() {
      // TODO drawCard from cards at position equal to stages length + number of previously drawn cards => 6 to begin with
    },
    determineIsActive(stageIndex) {
      return this.currentStageIndex === stageIndex;
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
