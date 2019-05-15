<template>
  <div class="row-stage">
    <card 
      :revealed="isRevealed"
      :suit="stage.card.suit" 
      :face-value="stage.card.name" 
    />
    <!-- if it is the 'active' stage, render the action buttons -->
    <div 
      v-if="isActive"
      class="button-group">
      <button 
        class="prediction-button"
        @click="predict('higher')">
        <font-awesome-icon icon="arrow-up" />
      </button>
      <button 
        class="prediction-button"
        @click="predict('lower')">
        <font-awesome-icon icon="arrow-down" />
      </button>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: "row-stage",
  components: {
    Card,
  },
  props: { 
    stage: {
      type: Object
    },
    activeStageId: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      prediction: null,
    }
  },
  computed: {
    isRevealed: function() {
      return (this.stage.id <= this.activeStageId) ? true : false;
    },
    isActive: function() {
      return  this.activeStageId === this.stage.id && 
              this.stage.name != "bonus";
    }
  },
  methods: {
    predict(prediction) {
      this.prediction = prediction;
      // pass prediction, and card value to next stage on game row
      this.$emit("prediction", this.prediction, this.stage.card.value);
    }
},
  created() {

  }
}
</script>

<style scoped>
.prediction-button {
  font-size: calc(var(--card-width) * .16);;
  height: calc(var(--card-width) * .32);
  width: calc(var(--card-width) * .32);
  border: .15rem solid white;
  border-radius: 50%;
  background-color: rgb(55, 218, 209);
  color: white;
}

</style>


