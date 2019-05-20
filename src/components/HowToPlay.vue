<template>
  <section class="how-to-play-modal">
    <h1>How to play <span class="logo-title">Card Sharp</span></h1>
    <hr>
    
    <p>The game begins with six cards dealt in a row. The first card, called the <em>base card</em>, is dealt face up. The last five are dealt face down. The <b>objective</b> is to correctly guess whether the next card in the row will be higher or lower than the base card.</p>
    
    <hr>
    <h5>Order of Cards (lowest to highest)</h5>
    <h5><b>2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A</b></h5>
    <hr>

    <p>If you guess correctly, you earn 100 points. If not, you don't lose any points but you <b>do lose a try</b>. You have a total of four tries at the beginning of each game.</p>
    <ul class="guess-examples">
        <li>The base card is a "2", you guess the next card will be "higher". The next card is an "8"! You earn 100 points.</li>
        <li>The base card is a "J", you guess the next card will be "lower". The next card is an "K"! You lose one try.</li>
        <li>The base card is a "5", you guess the next card will be "higher". The next card is an "5"! You lose one try.</li>
    </ul>
    <p>If you make a correct guess, the revealed card becomes the new base card and play continues to the right. If you make an incorrect guess, your try is over, the cards are re-shuffled and a new row of six cards is dealt.</p>
    
    <h5>Don't like the card? Swap it!</h5>
    <p>If you don't like the value of a base card, you can spend 50 points and swap it with a new card. You can only do this once per card, and you cannot swap when there's only one card remaining face down. This remaining card is <em>special</em>, and we'll explain that next.</p>
    
    <h5>The Bonus Card!</h5>
    <p>When there's only one card remaining face down in a row... <b>Congrats, you've just won the row!</b> The last card in the row is a Bonus Card. This time, when you correctly guess either <em>higher</em> or <em>lower</em>, you get to collect a <b>special bonus:</b></p>
    <blockquote class="special-bonus-note">There are two types of special bonus rewards. When you collect a bonus reward, you can either collect the bonus as extra points (+300 points) or as an extra try (+1 try). You can change the type of reward by clicking the Bonus section in the upper left hand corner (look for the <font-awesome-icon icon="star" /> icon).</blockquote>
    <p>Even better, if you guess incorrectly you don't lose a try. Afterward, the cards are re-shuffled, a new row of six cards is dealt and play continues.</p>

    <h5>End Game</h5>
    <p>When you guess incorrectly but have no more tries remaining, the game is over.<em>But you won't really let that happen, now will you?</em></p>
    
    <h5>Ready, Set, Play!</h5>
    <p>That's it. You're all set! Now go get that <b>high score!</b></p>
  </section>
</template>

<script>
import Card from './Card.vue';

export default {
    name: "how-to-play-modal",
    components: {
        Card
    }
}
</script>

<style>

    .logo-title {
        font-family: var(--righteous);
    }
    .how-to-play-modal {
        color: black;
    }
    .special-bonus-note {
        margin: 5%;
    }

</style>


