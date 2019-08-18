# Card Sharp

Card Sharp is a made-for-web card game inspired by the classic TV game show 'Card Sharks'. Unlike the TV version, Card Sharp is played by one person. As play progresses players accumulate points for making correct predictions in hopes of achieving a high score.

---

## Technical Notes

This application is still under development. In the meantime, you can still try out the [Demo Version](https://justinrhammonds.github.io/card-sharp-game). The web application is built using the Vue.js front-end JavaScript framework. Note: For tis initial Proof of Concept, the UI is optimized for the latest version of Chrome. This was done intentionally because I wanted to work with and incorporate newer, more bleeding edge patterns and concepts in CSS and JS for my own edification. Future work will be done to extend this to support in additional browsers and earlier versions.

## Why did I choose this game to build?

I wanted to build a card game, in part because I remember enjoying watching Card Sharks on TV as a kid, and also because my niece and nephew are really fascinated by games and programming and always enjoy watching me write code. This game is as much for them as it is for me.

## Running Demo app locally

### Run `npm install` to install packages

### Run `npm run serve` to start running the app locally

---

## Features

- **Card component** - SVG Splicing combined with css calc() to manage card dimensions and display
- **GameControls component** - contains the page elements for interaction during game flow: predictions, swaps etc.
- **SiteNav & Hud components** - site navigation, scoring, hearts
- **Scoring & Card Swaps** - new scoring bonus and swap penalty systems were implement to award taking risk during gameplay
- **Fluid Layout and (Google) Fonts** - built using Flexbox and Calc to achieve ideal layout between, primarily optimized for viewport widths between 400px and 1600px
- **Custom Modal component** displays final score at the conclusion of each game.

## Features Planned, Not Yet Implemented

- LEADERBOARD - integration with a Node API will update an all-time high score list.
- VUE NATIVE - I'm planning to implement the app in Vue Native for download onto devices.
- INTERACTIVE TUTORIAL - At some point, I'd like the tutorial to be an interactive walk-through.

---

# How to Play "Card Sharp"

**Object:** Score the most points before you run out of tries (hearts).
When the game begins, you have 3 tries.

## Board Setup:

**BASE-CARD | ROW-1 | ROW-2 | ROW-3 | ROW-4 | BONUS-CARD**

## Card Order (low to high):

2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

## Gameplay

Start by predicting whether the next card (left to right) will be "higher" or "lower". If a swap is available, you can choose to swap the current card for a new card.

After you make a prediction and next card is revealed:

- If new card is a joker, collect a bonus and swap for it for a new card
- If prediction is correct, you earns points. The revealed card is now the 'base card' and play continues.
- If prediction is incorrect, you lose one try. If there are no more tries,
  the game is over. Otherwise, the player loses a try and the board resets for a new mini-game.
- By default, it is an incorrect guess when the revealed card is the same value as the previous card

You will **win a game row** by making four correct predictions. In the final stage of a game row, players will
make a bonus prediction (no swap is available, but you will not lose the try if the prediction is incorrect).

## Bonus Tries

When a joker is revealed or when you correctly predict the bonus stage you will win an extra try

## Streak Bonus

Your streak bonus will increase with every correct guess (+100 points each) and will not reset until you guess incorrectly in one of the non-bonus stages.

## Swap Penalty Streak

While non-bonus stages are each allowed one swap, the scoring penalty for a swap will become more severe (-50 points with each swap). This penalty amount will reset when an incorrect guess is made on a non-bonus stage.

Swaps Table: (NOTE: Not all stages have swaps)
Base Card: Player can swap once for a point penalty
1st Row Card: Player can swap once for a point penalty
2nd Row Card: Player can swap once for a point penalty
3rd Row Card: Player can swap once for a point penalty
4th Row Card: Player cannot swap

\*\*\*Note: A player's score will never go below 0.

## Thanks for visiting!
