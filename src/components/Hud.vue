<template>
  <nav class="hud">
    <ul>
      <li 
        class="bonus-type"
        @click="toggleBonus()">
        <span class="bonus-container"><font-awesome-icon icon="star" />Bonus: {{bonus}}</span>
      </li>
      <!-- TODO
      <li class="total-score">
        Score: {{totalScore}}
      </li>
      <li class="total-tries">
        Tries Remaining: {{triesRemaining}}
      </li> 
      -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "hud",
  data() {
    return {
      bonus: "+300 Points",
    }
  },
  computed: {
    totalScore: function() {
      return 0;
    },
    ltriesRemaining: function() {
      return 3;
    },
  },
  methods: {
    toggleBonus() {
      if (this.bonus === "+300 Points") {
        this.bonus = "+1 Try";
      } 
      else {
        this.bonus = "+300 Points";
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

  .bonus-container {
    border: 2px solid white;
    padding: .5rem;
    width: calc(var(--card-width) * 4);
  }

  .fa-star {
    margin-right: .5rem;
  }

</style>
