<template>
  <img class="card" :src="path" > 
</template>

<script>
export default {
  name: 'card',
  props: {
    suit: {
      default:"spades",
      type: String
    },
    faceValue: {
      default:"card-back",
      type: String
    }
  },
  computed: {
    path: function() {
      /*
      cannot just reference as `../assets/${...}.svg#view-${...}`
      this is because vue binding is executed at runtime while 
      webpack aliases are executed at compile time
      */
      const url = require(`../assets/${this.suit}.svg`);
      return `${url}#view-${this.faceValue}`;
    } 
  }
}
</script>

<style scoped>

.card {
  height: var(--card-height);
  width: var(--card-width);
}

</style>
