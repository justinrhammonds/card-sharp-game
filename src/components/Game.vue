<template>
  <div id="game">
    <nav class="hud">
      <ul>
        <li 
        class="bonus-type"
        @click="toggleBonus()"
        >
          <font-awesome-icon :icon="bonus" /> BONUS
        </li>
        <li class="total-score">
          <font-awesome-icon icon="dollar-sign" />{{totalScore}}
        </li>
        <li class="total-lives">
          <font-awesome-icon icon="heart" /> {{livesRemaining}}
        </li>
      </ul>
    </nav>
    <game-row />
  </div>
</template>

<script>
import GameRow from '../components/GameRow.vue';
import cards from '../components/Card.vue';

export default {
  name: "game",
  data() {
    return {
      cards,
    }
  },
  components: {
    GameRow,
  },
  computed: {
    bonus: function() {
      return "dollar-sign";
    },
    totalScore: function() {
      return 0;
    },
    livesRemaining: function() {
      return 3;
    },
  },
  methods: {
    toggleBonus() {
      if (this.bonus === "dollar-sign") {
        return this.bonus = "heart"
      } 
      else {
        return this.bonus = "dollar-sign"
      }
    }
  }
}
</script>

<style scoped>

.hud {
  background-color: #750a70;
  color: #fff;
  font-family: var(--open-sans);
  font-weight: 700;
}

.hud ul {
  margin: 0 auto;
  padding: .5rem;
  display: grid;
  grid-template: "bonus score lives" auto / 25% 50% 25%; 
  align-items: center;
}

.bonus-type {
  grid-column-start: bonus;
  justify-self: start;
}

.total-score {
  font-weight: 600;
  grid-column-start: score;
  justify-self: center;
}

.total-lives {
  grid-column-start: lives;
  justify-self: end;
}

</style>
