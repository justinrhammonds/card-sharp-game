<template>
  <div 
    class="game-controls">
    <div class="panel-1">
      <button v-if="isNotBonusStage"
        class="control-button blue"
        @click="predict('higher')">
        Higher
      </button>
      <button v-if="isNotBonusStage"
        class="control-button blue"
        @click="predict('lower')">
        Lower
      </button>
    </div>
    <div class="panel-2">
      <button v-if="swapAvailable"
        class="control-button orange"
        @click="swap()">
        Swap Card
      </button>
      <button  
        v-if="bonusStageWon"
        class="control-button green"
        @click="collectBonus()">
        Collect Bonus
      </button>
      <button  
        v-if="isJokerCard"
        class="control-button green"
        @click="collectJokerBonus()">
        Collect Bonus
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "game-controls",
  props: {
    stage: {
      type: Object
    }
  },
  data() {
    return {
      prediction: null,
    }
  },
  computed: {
    isNotBonusStage: function() {
      return this.stage.name !== "bonus" && !this.isJokerCard;
    },
    bonusStageWon: function() {
      return this.stage.name === "bonus" && this.stage.evaluation === true;
    },
    swapAvailable: function() {
      return this.stage.swaps > 0 && !this.isJokerCard;
    },
    isJokerCard: function() {
      return this.stage.card.value === 0 && this.stage.name !== "bonus";
    }
  },
  methods: {
    predict(prediction) {
      this.prediction = prediction;
      this.$emit("prediction", this.prediction);
    },
    collectBonus() {
      this.$emit("collect-bonus");
    },
    collectJokerBonus() {
      this.$emit("collect-joker-bonus");
    },
    swap() {
      this.$emit("swap");
    }
  }
}
</script>
<style scoped>

  .panel-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: calc(var(--card-height) * .2);
    width: 100vw;
  }

  .panel-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: calc(var(--card-height) * .1);
    width: 100vw;
  }

  .control-button {
    text-transform: uppercase;
    color: white;
    border: calc(var(--card-width) * .018) solid white;
    width: calc(var(--card-width) * 1.3);
    height: calc(var(--card-width) * .65);
    margin: 0 calc(var(--card-width) * .2);;
    font-family: var(--open-sans);
    font-size: calc(var(--card-width) * .18);
    font-weight: 700;
    outline: none;
  }

  .orange {
    background-color: var(--orange);
  }

  .blue {
    background-color: var(--blue);
  }

  .green {
    background-color: var(--green);
  }

</style>
