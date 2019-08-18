<template>
  <section class="instructions">
    <p>The game begins with six cards dealt in a row. The first card is dealt face up, and the last five are dealt face down. You earn points and progress through each row by correctly guessing whether the next card will be higher or lower. Each time you guess correctly, the amount of points you will earn increases. When you guess incorrectly, the board and the streak bonus resets, and you start over on a new row.</p>
    <div class="card-order">
      <h3 class="title-heading">Order of Cards</h3>
      <div class="order-grouping">
        <card
          :key="index"
          v-for="(n,index) in this.demoCards"
          :revealed="true"
          suit="hearts"
          :face-value="n"
        />
      </div>
    </div>
    <p>If you don't like a card, you can swap it for a new one. You can only do this once per card, and you cannot swap when there's only one card (the bonus card) remaining. Be careful though. Each time you swap, the scoring penalty will become more severe.</p>
    <p>The last card in every row is a bonus card. Correctly guessing this card earns you an extra heart! Even better, you don't lose a heart when you guess incorrectly! One more thing: there are two jokers in the deck. If a joker card is revealed at any point you will automatically win an extra heart!</p>
    <p>At the start of a new game, you have three hearts. You lose one heart for each incorrect guess. When you have no more hearts remaining and make an incorrect guess, the game is over.</p>
  </section>
</template>

<script>
import Card from "./Card";

export default {
  name: "instructions",
  components: {
    Card
  },
  data() {
    return {
      demoCards: [
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "jack",
        "queen",
        "king",
        "ace"
      ]
    };
  }
};
</script>

<style scoped>
.instructions {
  overflow-x: hidden;
  color: white;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
}

.order-grouping {
  display: flex;
  justify-content: space-evenly;
  margin-left: 10%;
}

.order-grouping .card {
  margin-left: -40%;
  overflow: hidden;
}
</style>
