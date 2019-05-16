<template>
  <div 
    class="game-controls">
    <button 
      class="prediction-button"
      @click="predict('higher')">
      Higher
    </button>
    <button 
      class="prediction-button"
      @click="predict('lower')">
      Lower
    </button>
  </div>
</template>

<script>
export default {
  name: "game-controls",
  data() {
    return {
      prediction: null,
    }
  },
  methods: {
    predict(prediction) {
      this.prediction = prediction;
      // pass prediction, and card value to next stage on game row
      // this.$emit("prediction", this.prediction, this.stage.card.value);
      this.$emit("prediction", this.prediction);
    }
  }
}
</script>
<style scoped>

  .game-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: calc(var(--card-height) / 2);
    width: 100vw;
  }

  .prediction-button {
    text-transform: uppercase;
    background-color: aqua;
    color: white;
    border: none;
    width: calc(var(--card-width) * 1.5);
    height: calc(var(--card-width) * .75);
    margin: 0 2rem;
    font-family: var(--open-sans);
    font-size: calc(var(--card-width) * .2);
    font-weight: 700;
    outline: none;
  }

</style>
