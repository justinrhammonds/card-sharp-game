<template>
  <img class="card" :src="path" />
</template>

<script>
export default {
  name: "card",
  props: {
    revealed: {
      default: false,
      type: Boolean
    },
    suit: {
      type: String
    },
    faceValue: {
      type: String
    }
  },
  computed: {
    path: function() {
      const url = require(`../assets/${this.suit}.svg`);
      if (this.revealed) {
        return `${url}#view-${this.faceValue}`;
      } 

      return `${url}#view-card-back`;
    }
  }
};
</script>

<style scoped>
.card {
  height: var(--card-height);
  width: var(--card-width);
  border-radius: calc(var(--card-width) * 0.075);
  box-shadow: 2px 4px 8px -4px black, -2px 4px 8px -4px black;
}
</style>
