<template>
  <section class="hud">
    <ul>
      <li 
        ref="tries-value"
        class="total-tries">
        <font-awesome-icon :key="index" v-for="(n,index) in tries" icon="heart" />
      </li>
      <li
        ref="score-value"
        class="total-score">
        Score : {{score}}
      </li> 
      <li 
        class="bonus-container">
        <span 
          v-if="this.bonus === 'score'"
          class="bonus-type" 
          @click="toggleBonus()">
          <font-awesome-icon icon="star" /> + 300
        </span>
        <span 
          v-else
          class="bonus-type"
          @click="toggleBonus()"><font-awesome-icon icon="star" /> + 1 
          <font-awesome-icon icon="heart" />
        </span>
      </li>
    </ul>
  </section>
</template>

<script>

export default {
  name: "hud",
  props: {
    score: {
      type: Number,
    },
    tries: {
      type: Number,
    }
  },
  data() {
    return {
      bonus: "score"
    }
  },
  watch: {
    score: function(newValue, oldValue) {
      if (oldValue < newValue) {
        this.$refs["score-value"].classList.toggle('higher');
        setTimeout(() => {
          this.$refs["score-value"].classList.toggle('higher');
        }, 1000);
      }

      if (oldValue > newValue && newValue !== 0) {
        this.$refs["score-value"].classList.toggle('lower');
        setTimeout(() => {
          this.$refs["score-value"].classList.toggle('lower');
        }, 1000);
      }
    },
    tries: function(newValue, oldValue) {
      if (oldValue < newValue  && (newValue === 0 && oldValue <= 0)) {
        this.$refs["tries-value"].classList.toggle('higher');
        setTimeout(() => {
          this.$refs["tries-value"].classList.toggle('higher');
        }, 1500);
      }

      if (oldValue > newValue) {
        this.$refs["tries-value"].classList.toggle('lower');
        setTimeout(() => {
          this.$refs["tries-value"].classList.toggle('lower');
        }, 1500);
      }
    }
  },
  methods: {
    toggleBonus() {
      if (this.bonus === "score") {
        this.bonus = "tries";
      } 
      else {
        this.bonus = "score";
      }

      this.$emit("bonus-toggle", this.bonus);
    }
  },
}

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
    padding: 1rem calc(var(--nav-font-size) * .5);
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
    padding: calc(var(--nav-font-size) * .05) calc(var(--nav-font-size) * .15);
  }

  .total-tries {
    float: left;
    width: 20vw;
    transition: color 1s ease;
  }

  .total-score {
    margin: 0 auto;
    text-align: center;
    width: 60vw;
    transition: color 1s ease;
  }
  
  .fa-star {
    margin-right: .6rem;
  }

  .fa-heart {
    margin: 0 .25rem;
  }

.higher {
  transition: color 1s ease;
  color: lime; 
}
.lower {
  transition: color 1s ease;
  color: var(--bright-coral);
}

</style>
