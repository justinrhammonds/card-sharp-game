<template>
  <form @submit.prevent="submit" class="highscore-form">
    <fieldset>
      <legend class="instructions">Enter name containing 4 to 10 alphanumeric characters.</legend>
      <input
        v-focus
        id="username"
        type="text"
        placeholder="enter username"
        size="10"
        :pattern="inputValidation"
        required
        v-model="usernameInput"
        @input="validate(usernameInput)"
      />
      <button v-if="isValidInput" class="add-score-btn">Submit</button>
    </fieldset>
  </form>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "high-score-form",
  data: function() {
    return {
      inputValidation: "[A-Za-z0-9]{4,10}",
      usernameInput: null,
      isValidInput: false
    };
  },
  methods: {
    ...mapActions(["updateLeaderboard"]),
    ...mapMutations(["setHighScoreForm"]),
    submit() {
      this.updateLeaderboard({ username: this.usernameInput });
      this.setHighScoreForm({ submitted: true });
    },
    validate(input) {
      if (input.match(this.inputValidation)) {
        this.isValidInput = true;
      }
    }
  },
  created() {}
};
</script>

<style scoped>
.highscore-form {
  margin-top: 2rem;
  border-bottom: 0.5rem double #222;
}

.instructions {
  font-family: var(--open-sans);
}

.highscore-form fieldset {
  border: none;
}

.add-score-btn {
  background-color: var(--green);
  color: white;
  border: none;
  font-size: var(--nav-font-size);
  font-family: var(--open-sans);
  margin: 1.2rem auto;
  padding: 0.75rem;
  text-transform: uppercase;
}

#username {
  border: none;
  background-color: rgba(0, 0, 0, 0);
  caret-color: grey;
  color: white;
  font-size: calc(20px + (40 - 20) * (100vw - 400px) / (1600 - 400));
  font-family: var(--open-sans);
  padding: 1rem;
  text-align: center;
  width: 100%;
}

#username:focus,
.add-score-btn:focus {
  outline: none;
}

#username::placeholder {
  color: #333;
}
</style>