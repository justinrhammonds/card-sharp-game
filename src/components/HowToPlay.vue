<template>
  <section class="how-to-play-modal">  
    <h1 class="title-heading">Tutorial Coming Soon!</h1>
    <p>The game begins with six cards dealt in a row. The first card is dealt face up, and the last five are dealt face down. You earn points and progress through each row by correctly guessing whether the next card will be higher or lower. When you guess incorrectly, the board resets and you start over on a new row.</p>
    
    <div class="card-order">
      <h2 class="title-heading">Order of Cards</h2>
      <div class="order-grouping">
        <card :key="index" v-for="(n,index) in this.demoCards" :revealed="true" suit="hearts" :face-value="n" style="overflow:hidden;" />
      </div>
    </div>

    <p>If you don't like a card, you can swap it for a new one. You can only do this once per card, and you cannot swap when there's only one card (the bonus card) remaining. </p> 

    <p>The last card in every row is a BONUS card... Correctly guessing this card earns you a special bonus! Even better, guessing incorrectly doesn't penalize you! There are two different bonus types: 300 extra points or one extra heart. You can switch these at any time. There are also two jokers in the deck. If a joker card is revealed at any point, you win a FREE bonus!</p>

    <p>At the start of a new game, you have three hearts. You lose one heart for each incorrect guess. When you have no more hearts remaining and make an incorrect guess, the game is over.</p>
  </section>
</template>

<script>
  import Card from "./Card";

  export default {
    name: "how-to-play-modal",
    components: {
      Card
    },
    data() {
      return {
        demoCards: ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"]
      }
    },
  }
</script>

<style>

  .how-to-play-modal {
    background: #1a1a1a;
    overflow-x: hidden;
    color: white;
    width: 100vw;
    height: 100vh;
    padding: 5vh 5vw;
  }

  .title-heading {
    font-family: var(--monoton);
    font-weight: 400;
  }

  .order-grouping {
    display: flex;
    justify-content: space-evenly;
    margin-left: 10%;
  }

  .order-grouping .card {
    margin-left: -40%;
  }

</style>


