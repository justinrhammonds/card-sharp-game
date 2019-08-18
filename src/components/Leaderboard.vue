<template>
  <div class="leaderboard">
    <h3>All-Time Leaderboard</h3>
    <ul class="score-list">
      <li class="score" :key="index" v-for="(record, index) in highestScores">
        <span class="score-amount">{{record.score}}</span>
        <span class="score-player">{{record.player}}</span>
        <span class="score-date">{{displayDate(record.date)}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "leaderboard",
  computed: {
    ...mapGetters(["highestScores"])
  },
  methods: {
    displayDate(date) {
      return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
    }
  }
};
</script>

<style scoped>
.leaderboard {
  text-align: center;
  text-transform: uppercase;
  word-spacing: 1rem;
  border-top: 0.5rem double white;
  padding: 1.5rem;
}

.leaderboard h3 {
  color: mediumvioletred;
}

.score {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
}

.score-list {
  padding: 0;
}

.score-amount {
  align-content: left;
}

.score-player {
  align-content: center;
}

.score-date {
  align-content: right;
}

.leaderboard li {
  font-family: var(--open-sans);
}
</style>