<template>
  <div class="row-stage">
    <div 
      class="bonus-marker"
      v-if="isBonusStage">
      <font-awesome-icon icon="star" />
      <h3>Bonus</h3>
      <font-awesome-icon icon="star" />
    </div>
    <div :class="stageHighlightType">
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
    stageHighlightType: function() {
      if (this.activeStageId + 1 === this.rowStage.id && this.isBonusStage) {
        return "bonus-highlight";
      }
      else if (this.activeStageId + 1 === this.rowStage.id ) {
        return "highlighted";
      }
      else {
         return "";
      }
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
  
  .bonus-highlight {
    background-color: #b5f174;
    border-radius: 4%;
    box-shadow: 0 0 calc(var(--card-width) * .06) calc(var(--card-width) * .06) #b5f174;
  }

  .bonus-marker {
    font-size: var(--nav-font-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bonus-marker h3 {
    font-size: var(--nav-font-size);
    margin:  10% 3%;
    text-transform: uppercase;
  }
  
</style>
