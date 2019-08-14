<template>
  <div class="game-controls">
    <div v-if="guessWasIncorrect" class="incorrect-marker">
      <svg viewBox="0 0 1000 1000">
        <path
          d="M 0 200, L 200 0, L 500 300, L 800 0, L 1000 200, L 700 500, L 1000 800, L 800 1000, L 500 700, L 200 1000, L 0 800, L 300 500"
          style="fill:red;"
        />
      </svg>
    </div>
    <button
      v-if="isNotBonusStage && guessWasCorrect"
      class="control-arrow up"
      @click="predict('higher')"
    >
      <svg viewBox="0 0 600 600">
        <path
          d="M 300 0, L 600 400, L 400 400, L 400 600, L 200 600, L 200 400, L 0 400"
          style="fill:lime;"
        />
      </svg>
    </button>
    <button
      v-if="isNotBonusStage && guessWasCorrect"
      class="control-arrow down"
      @click="predict('lower')"
    >
      <svg viewBox="0 0 600 600">
        <path
          d="M 200 0, L 400 0, L 400 200, L 600 200, L 300 600, L 0 200, L 200 200"
          style="fill:lime;"
        />
      </svg>
    </button>
    <button
      v-if="swapAvailable && guessWasCorrect"
      class="ribbon swap blue"
      @click="swapCardForPenalty"
    >
      <span class="ribbon-content">Swap</span>
    </button>
    <button v-if="bonusStageWon && guessWasCorrect" class="ribbon bonus green" @click="awardBonus">
      <span class="ribbon-content">Bonus</span>
    </button>
    <button v-if="isJokerBonus" class="ribbon bonus green" @click="awardBonus">
      <span class="ribbon-content">Bonus</span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "game-controls",
  computed: {
    ...mapGetters(["isBonusStage", "currentStage"]),
    guessWasCorrect: function() {
      return !this.guessWasIncorrect;
    },
    guessWasIncorrect: function() {
      return this.currentStage.evaluation === false;
    },
    isNotBonusStage: function() {
      return !this.isBonusStage(this.currentStage.id) && !this.isJokerCard;
    },
    bonusStageWon: function() {
      return this.isBonusStage(this.currentStage.id) && this.guessWasCorrect;
    },
    swapAvailable: function() {
      return this.currentStage.swaps > 0 && !this.isJokerCard;
    },
    isJokerBonus: function() {
      return (
        this.currentStage.card.value === 0 &&
        !this.isBonusStage(this.currentStage.id)
      );
    }
  },
  methods: {
    ...mapActions([
      "swapCardForPenalty",
      "awardBonus",
      "advanceStageAndEvaluate"
    ]),
    predict(prediction) {
      this.advanceStageAndEvaluate({ prediction });
    }
  }
};
</script>

<style scoped>
.game-controls {
  position: relative;
}

.incorrect-marker svg {
  position: absolute;
  left: 1.5vw;
  top: calc(var(--card-height) * 0.25);
  width: calc(var(--card-width) * 0.75);
  height: calc(var(--card-width) * 0.75);
  filter: drop-shadow(2px 3px 3px rgba(0, 0, 0, 0.7));
}

.control-arrow {
  position: absolute;
  left: 16.666666667vw;
  text-transform: uppercase;
  background: none;
  border: none;
  width: calc(var(--card-width) * 0.5);
  height: calc(var(--card-width) * 0.5);
  margin: 0 calc(var(--card-width) * 0.2);
  outline: none;
}

.down {
  bottom: calc(var(--card-height) * -1.18);
}

.up {
  top: calc(var(--card-height) * -0.15);
}

.control-arrow svg {
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.55));
}

.blue {
  background-color: var(--blue);
}

.green {
  background-color: var(--green);
}

.ribbon {
  position: absolute;
  text-transform: uppercase;
  width: 116%;
  left: -8%;
  top: calc(var(--card-height) * 0.3333);
  border: none;
  color: white;
  text-align: center;
  padding: calc(var(--nav-font-size) * 0.5); /* Adjust to suit */
  font-size: calc(var(--card-width) * 0.1);
  font-family: var(--monoton);
  outline: none;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  text-shadow: 1.5px 1.5px var(--black);
}

.ribbon .ribbon-content:before,
.ribbon .ribbon-content:after {
  content: "";
  position: absolute;
  display: block;
  border-style: solid;
  bottom: calc(var(--card-width) * -0.08);
}

.ribbon .ribbon-content:before {
  left: 0;
  border-width: calc(var(--card-width) * 0.08) 0 0
    calc(var(--card-width) * 0.08);
}

.ribbon .ribbon-content:after {
  right: 0;
  border-width: calc(var(--card-width) * 0.08) calc(var(--card-width) * 0.08) 0
    0;
}

.green .ribbon-content:before,
.green .ribbon-content:after {
  border-color: #15af15 transparent transparent transparent;
}

.blue .ribbon-content:before,
.blue .ribbon-content:after {
  border-color: #0050ff transparent transparent transparent;
}
</style>
