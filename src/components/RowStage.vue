<template>
  <div class="row-stage">
    <div class="bonus-marker" v-if="isBonusStage(rowStage.id)">
      <font-awesome-icon icon="star" />
      <h3>Bonus</h3>
      <font-awesome-icon icon="star" />
    </div>
    <slot v-if="activeStageIndex === rowStage.id" name="default"></slot>
    <card :revealed="isRevealed" :suit="rowStage.card.suit" :face-value="rowStage.card.name" />
    <div class="bonus-marker" v-if="isBonusStage(rowStage.id)">
      <font-awesome-icon icon="star" />
      <h3>Bonus</h3>
      <font-awesome-icon icon="star" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "row-stage",
  components: {
    Card
  },
  props: {
    rowStage: {
      type: Object
    }
  },
  computed: {
    ...mapState(["activeStageIndex"]),
    ...mapGetters(["isBonusStage"]),
    isRevealed: function() {
      return this.rowStage.id <= this.activeStageIndex ? true : false;
    }
  }
};
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
  text-shadow: 1.5px 1.5px var(--black);
}

.bonus-marker h3 {
  font-family: var(--monoton);
  font-size: calc(7px + (20 - 7) * (100vw - 400px) / (1600 - 400));
  margin: 10% 3%;
  text-transform: uppercase;
}

.bonus-marker svg {
  filter: drop-shadow(1px 1px 0 #222);
}
</style>
