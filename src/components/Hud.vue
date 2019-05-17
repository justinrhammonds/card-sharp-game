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
      <li class="total-lives">
        Tries Remaining: {{livesRemaining}}
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
      bonus: "Points",
      toggle: "toggle-on",
    }
  },
  computed: {
    totalScore: function() {
      return 0;
    },
    livesRemaining: function() {
      return 3;
    },
  },
  methods: {
    toggleBonus() {
      if (this.bonus === "Points") {
        this.toggle = "toggle-on";
        this.bonus = "Lives";
      } 
      else {
        this.toggle = "toggle-off";
        this.bonus = "Points";
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
  }

  .fa-star {
    margin-right: .5rem;
  }

</style>
