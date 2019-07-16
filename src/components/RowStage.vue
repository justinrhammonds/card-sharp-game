<template>
  <div class="row-stage">
    <div 
      class="bonus-marker"
      v-if="isBonusStage">
      <font-awesome-icon icon="star" />
      <h3>Bonus</h3>
      <font-awesome-icon icon="star" />
    </div>
    <div>
      <slot v-if="activeStageId === rowStage.id" name="default"></slot>
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
    <div 
      class="bonus-marker"
      v-if="isBonusStage">
      <font-awesome-icon icon="star" />
      <h3>Bonus</h3>
      <font-awesome-icon icon="star" />
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
    isBonusStage: function() {
      return this.rowStage.name === "bonus";
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

  .bonus-marker {
    font-size: calc(7px + (20 - 7) * (100vw - 400px) / (1600 - 400));
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 1.5px 1.5px #222;
  }

  .bonus-marker h3 {
    font-family: var(--monoton);
    font-size: calc(7px + (20 - 7) * (100vw - 400px) / (1600 - 400));
    margin:  10% 3%;
    text-transform: uppercase;
    font-weight: 400;
  }

  .bonus-marker svg {
    filter:drop-shadow(1px 1px 0 #222);
  }
  
</style>
