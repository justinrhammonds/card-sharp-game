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
      if (this.revealed) {
        return `/img/${this.suit}.svg#view-${this.faceValue}`;
      }

      return `/img/${this.suit}.svg#view-card-back`;
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
