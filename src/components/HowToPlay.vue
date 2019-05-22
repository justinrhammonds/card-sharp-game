<template>
  <section class="how-to-play-modal">  
    <p>The game begins with six cards dealt in a row. The first card, called the <em>base card</em>, is dealt face up. The last five are dealt face down. The <b>objective</b> is to correctly guess whether the next card in the row will be higher or lower than the base card.</p>
    
    <div class="card-order">
      <h5><span class="title-heading">Order of Cards </span> from lowest to highest</h5>
      <div class="order-grouping">
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>J</span>
        <span>Q</span>
        <span>K</span>
        <span>A</span>
      </div>
    </div>

    <h4 class="highlighted-instructions">Making Predictions</h4>

    <p>If you guess correctly, you earn 100 points. If not, you don't lose any points but you <b>do lose a try</b>. You have a total of four tries at the beginning of each game.</p>
    <p>When you make a guess, the revealed card becomes the new base card and play continues to the right. Though if you guess incorrectly, your try is over, the cards are re-shuffled, and a new row of six cards is dealt.</p>

    <h5><em>A Basic Example</em></h5>
    <p>Let's say that the base card is a <b>2</b> and you click <b>higher</b>. The next card revealed is an <b>8</b>. You guessed correct and win 100 points!</p>
    <p>Now the base card is <b>8</b> and you click <b>lower</b>. The next card is a <b>K</b>. Your guess was incorrect and you lose a try.</p>
    <p>The new base card is a <b>5</b>. You click <b>higher</b>, but the next next revealed is also a <b>5</b>. Since it's neither higher or lower the guess is incorrect and you lose another try.</p>
    
    <h4 class="highlighted-instructions">Don't like the card? Swap it!</h4>
    <p>If you don't like the value of a base card, you can spend 50 points and swap it with a new card. You can only do this once per card, and you cannot swap when there's only one card (the bonus card) remaining face down. This remaining card is <em>special</em>, and we'll explain that next.</p>

    <h4 class="highlighted-instructions">The Bonus Card!</h4>
    <p>When there's only one card remaining face down in a row... <b>Congrats, you've just won the row!</b> The last card in the row is a bonus card. When you correctly guess <em>higher</em> or <em>lower</em> on the bonus card, you get to collect a <b>special bonus:</b></p>
    <blockquote class="special-bonus-note">There are two types of special bonus rewards: you can either collect the bonus as extra points (+300 points) or as an extra try (+1 try). You can change the type of reward by clicking the <font-awesome-icon icon="star" /> <b>Bonus</b> section in the upper left hand corner.</blockquote>
    <p>Fun fact: When you guess incorrectly on the bonus stage, it doesn't count against you so you won't lose a try.</p>

    <h4 class="highlighted-instructions">Joker Bonus!</h4>
    <p>There are two jokers in each deck, so if a joker card is revealed at any stage, you win a FREE bonus!</p>

    <h4 class="highlighted-instructions">End Game</h4>
    <p>When you guess incorrectly but have no more tries remaining, the game is over. But you won't really let that happen, <b>will you</b>?</p>
    
    <h4 class="highlighted-instructions">Ready, Set, Play!</h4>
    <p>That's it. You're all set. Now go get that <b>high score!</b></p>
  </section>
</template>

<script>
export default {
  name: "how-to-play-modal",
}
</script>

<style>

  .how-to-play-modal {
    color: black;
  }

  .title-heading {
    font-family: var(--righteous);
  }

  .highlighted-instructions {
    color: #22a9a9;
  }

  .card-order {
    background-color: #e8e8e8;
    margin: 4% 0;
    padding: 2%;
    text-align: center;
  }
  
  .order-grouping {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }

  .order-grouping span {
    font-family: var(--graduate);
    font-size: calc(30px + (42 - 24) * (100vw - 400px) / (1600 - 400));
  }

  .guess-examples {
    list-style: none;
  }

  .special-bonus-note {
    margin: 5%;
  }

</style>


