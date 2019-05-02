<template>
  <div class="row-stage">
    <card 
      :suit="stageCard.suit" 
      :face-value="stageCard.name" 
    />
    <!-- if it is the 'active' stage, render the action buttons -->
    <div 
      v-if="active"
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
    stageId: {
      type: Number
    },
    swaps: {
      type: Number,
      default: 0
    },
    stageCard: {
      type: Object,
      default: () => ({
        suit: "spades", 
        name: "card-back", 
        value: 0,    
      })
    },
    isActive: {
      type: Boolean
    }
  },
  data() {
    return {
      prediction: null,
    }
  },
  computed: {
    // I think this should belong somewhere else
    active: function() {
      return this.isActive;
    }
  },
  methods: {
    predict(prediction) {
      this.prediction = prediction;
      // pass prediction, and card value to next stage on game row
      this.$emit("prediction", this.prediction, this.stageCard.value);
    }
  },
  created() {

  }
}
</script>

<style scoped>
.prediction-button {
  font-size: 2rem;
  height: 4rem;
  width: 4rem;
  border: none;
  border-radius: 50%;
}

</style>


