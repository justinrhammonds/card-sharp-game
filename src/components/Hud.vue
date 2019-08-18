<template>
  <section class="hud">
    <ul>
      <li ref="tries-value" class="total-tries">
        <span v-if="(tries > 4)">
          {{tries}}
          <font-awesome-icon icon="heart" />
        </span>
        <span v-else>
          <font-awesome-icon :key="index" v-for="(n,index) in tries" icon="heart" />
        </span>
      </li>
      <li ref="score-value" class="total-score">{{score}}</li>
      <li class="bonus-container">
        <div>
          Streak Bonus:
          <span class="streak-bonus">{{streakBonus}}</span>
        </div>
        <div>
          Swap Penalty:
          <span class="swap-penalty">{{swapPenalty * -1}}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "hud",
  computed: {
    ...mapState(["score", "tries", "settings", "streakBonus", "swapPenalty"])
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
  padding: 0.5rem calc(var(--nav-font-size) * 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bonus-container {
  font-family: var(--open-sans);
  font-size: var(--small-font-size);
  text-align: right;
}

.bonus-container span {
  padding-left: 0.5rem;
}

.streak-bonus {
  color: var(--green);
}

.swap-penalty {
  color: var(--bright-coral);
}

.total-tries {
  float: left;
}

.total-score {
  margin: 0 auto;
  text-align: center;
  font-size: var(--large-font-size);
}

.fa-star {
  margin-right: 0.6rem;
  color: var(--yellow);
}

.fa-heart {
  margin: 0 0.25rem;
}

.score-bonus {
  color: var(--green);
}

.swap-penalty {
  color: var(--bright-coral);
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
