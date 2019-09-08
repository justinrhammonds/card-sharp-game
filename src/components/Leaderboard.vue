<template>
  <div class="leaderboard">
    <high-score-form v-if="isNewHighScore" />
    <ul class="score-list">
      <h3>Leaderboard</h3>
      <li class="score" :key="index" v-for="(record, index) in leaderboard">
        <span class="score-amount">{{record.total}}</span>
        <span class="score-player">{{record.player}}</span>
        <span class="score-date">{{displayDate(record.date)}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import HighScoreForm from "./HighScoreForm";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "leaderboard",
  components: {
    HighScoreForm
  },
  computed: {
    ...mapState(["leaderboard"]),
    ...mapGetters(["isNewHighScore"])
  },
  methods: {
    ...mapActions(["getLeaderboard"]),
    displayDate(date) {
      const result = new Date(parseInt(date));
      if (!date) return "";
      return `${result.getMonth() +
        1}/${result.getDate()}/${result.getFullYear()}`;
    }
  },
  created() {
    this.getLeaderboard();
  }
};
</script>

<style scoped>
.leaderboard {
  text-align: center;
  border-top: 0.5rem double #222;
  padding: 1.5rem 0;
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
  width: 100%;
}

.score-list h3 {
  text-transform: uppercase;
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