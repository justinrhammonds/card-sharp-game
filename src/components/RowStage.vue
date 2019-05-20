<template>
  <div class="row-stage">
    <div :class="{highlighted: isNextStage}">
      <card v-if="isSwapped"
        :revealed="isRevealed"
        :suit="swappedCard.suit" 
        :face-value="swappedCard.name" 
      />
      <card v-else
        :revealed="isRevealed"
        :suit="rowStage.card.suit" 
        :face-value="rowStage.card.name" 
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
    rowStage: {
      type: Object
    },
    activeStageId: {
      type: Number,
      default: -1
    },
    swappedCard: {
      type: Object
    }
  },
  computed: {
    isRevealed: function() {
      return (this.rowStage.id <= this.activeStageId) ? true : false;
    },
    isNextStage: function() {
      return this.activeStageId + 1 === this.rowStage.id;
    },
    isSwapped: function() {
      return this.swappedCard != null && this.rowStage.id === this.activeStageId;
    },
  }
}
</script>

<style scoped>

  .row-stage {
    align-self: center;
  }

  .highlighted {
    background-color: aqua;
    border-radius: 4%;
    box-shadow: 0 0 calc(var(--card-width) * .06) calc(var(--card-width) * .06) aqua;
  }

</style>
