<template>
  <div class="row-stage">
    <div :class="{highlighted: isNextStage}">
      <card 
        :revealed="isRevealed"
        :suit="stage.card.suit" 
        :face-value="stage.card.name" 
      />
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
  computed: {
    isRevealed: function() {
      return (this.stage.id <= this.activeStageId) ? true : false;
    },
    isActive: function() {
      return  this.activeStageId === this.stage.id && 
              this.stage.name != "bonus";
    },
    isNextStage: function() {
      return this.activeStageId + 1 === this.stage.id;
    }
  },
  created() {

  }
}
</script>

<style scoped>
  .row-stage {
    align-self: center;
  }

  .highlighted {
    background-color: aqua;
    box-shadow: 0 0 calc(var(--card-width) * .06) calc(var(--card-width) * .06) aqua;
  }
</style>


