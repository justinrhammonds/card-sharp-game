<template>
  <nav class="hud">
    <ul>
      <li 
        class="bonus-type"
        @click="toggleBonus()">
        <span class="bonus-container"><font-awesome-icon icon="star" />Bonus: {{bonus}}</span>
      </li>
      <li class="total-score">
        Score: {{score}}
      </li>
      <li class="total-tries">
        Tries Remaining: {{tries}}
      </li> 
    </ul>
  </nav>
</template>

<script>
export default {
  name: "hud",
  props: {
    score: {
      type: Number
    },
    tries: {
      type: Number
    }
  },
  data() {
    return {
      bonus: "+300 Points",
    }
  },
  methods: {
    toggleBonus() {
      if (this.bonus === "+300 Points") {
        this.bonus = "+1 Try";
        this.$emit("bonus-toggle", "tries");
      } 
      else {
        this.bonus = "+300 Points";
        this.$emit("bonus-toggle", "score");
      }
    }
  }
}
</script>

<style scoped>

  .hud {
    width: 100vw;
    background-color: #750a70;
    color: #fff;
    font-family: var(--open-sans);
    font-size: var(--nav-font-size);
    font-weight: 700;
  }

  .hud ul {
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
  }

  .bonus-type {
    width: 40vw;
  }

  .bonus-type span {
    background-color: rgba(256,256,256,25%);
  }

  .bonus-container {
    border: 2px solid white;
    padding: .5rem;
    width: calc(var(--card-width) * 4);
  }

  .fa-star {
    margin-right: .5rem;
  }

</style>
