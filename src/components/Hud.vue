<template>
  <section class="hud">
    <ul>
      <li ref="tries-value" class="total-tries">
        <font-awesome-icon :key="index" v-for="(n,index) in tries" icon="heart" />
      </li>
      <li ref="score-value" class="total-score">Score : {{score}}</li>
      <li class="bonus-container">
        <span v-if="this.bonusType === 'score'" class="bonus-type" @click="toggleBonusType">
          <font-awesome-icon icon="star" />+ 300
        </span>
        <span v-else class="bonus-type" @click="toggleBonusType">
          <font-awesome-icon icon="star" />+ 1
          <font-awesome-icon icon="heart" />
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "hud",
  computed: {
    ...mapState(["bonusType", "score", "tries", "settings"])
  },
  watch: {
    score: function(newValue, oldValue) {
      if (oldValue < newValue) {
        this.toggleHudHighlight(this.$refs["score-value"], "higher");
      }

      if (oldValue > newValue && newValue !== 0) {
        this.toggleHudHighlight(this.$refs["score-value"], "lower");
      }
    },
    tries: function(newValue, oldValue) {
      if (
        oldValue < newValue &&
        !(newValue === this.settings.startingTries && oldValue <= 0)
      ) {
        this.toggleHudHighlight(this.$refs["tries-value"], "higher");
      }

      if (oldValue > newValue) {
        this.toggleHudHighlight(this.$refs["tries-value"], "lower");
      }
    }
  },
  methods: {
    ...mapMutations(["toggleBonusType"]),

    toggleHudHighlight(el, change) {
      el.classList.toggle(change);
      setTimeout(() => {
        el.classList.toggle(change);
      }, 1000);
    }
  }
};
</script>

<style scoped>
.hud {
  width: 100vw;
  background-color: mediumvioletred;
  color: white;
  font-family: var(--monoton);
  font-weight: 400;
  font-size: var(--nav-font-size);
}

.hud ul {
  margin: 0 auto;
  padding: 1rem calc(var(--nav-font-size) * 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bonus-container span:hover {
  cursor: pointer;
}

.bonus-container {
  background-color: mediumvioletred;
  text-align: right;
  width: 20vw;
}

.bonus-container span {
  border: 2px solid white;
  padding: calc(var(--nav-font-size) * 0.05) calc(var(--nav-font-size) * 0.15);
}

.total-tries {
  float: left;
  width: 20vw;
}

.total-score {
  margin: 0 auto;
  text-align: center;
  width: 60vw;
}

.fa-star {
  margin-right: 0.6rem;
}

.fa-heart {
  margin: 0 0.25rem;
}

@keyframes flash-red {
  0%,
  100% {
    color: white;
    filter: none;
    text-shadow: none;
  }
  50% {
    color: var(--bright-coral);
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.55));
    text-shadow: 2px 2px rgba(0, 0, 0, 0.55);
  }
}

@keyframes flash-green {
  0%,
  100% {
    color: white;
    filter: none;
    text-shadow: none;
  }
  50% {
    color: lime;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.55));
    text-shadow: 2px 2px rgba(0, 0, 0, 0.55);
  }
}

.higher {
  animation: flash-green 1.5s ease-in-out;
}

.lower {
  animation: flash-red 1.5s ease-in-out;
}
</style>
