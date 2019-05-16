# Card Sharp  
Card Sharp is a made-for-web card game inspired by the classic TV game show 'Card Sharks'. Unlike the TV version, Card Sharp is played by one person. As play progresses players accumulate points for making correct predictions in hopes of achieving a high score.

***

## Technical Specifications
This application is still under development. In the meantime, you can still try out the [Demo Version](https://justinrhammonds.github.io/card-sharp-game). The web application is built using the Vue.js front-end JavaScript framework.

### Run `npm install` to install packages

### Run `npm run serve` to start running the app locally   

***

## Features 
* **Card component** - SVG Splicing combined with css calc() to manage card dimensions and display
* **GameRow component** - the logic intensive component that drives the primary systems of game flow
* **GameControls component** - contains the page elements for interaction during game flow: predictions, etc.
* **SiteNav & Hud components** - static components mostly at this point. Future feature work will flesh these out
* Fluid Layout and (Google) Fonts built using Flexbox and Calc to achieve ideal layout between, primarily optimized for viewport widths between 400px and 1600px

## Features Planned, Not Yet Implemented
* Score & Tries Calculation (including Bonuses, and Swap Penalties)
* Swap Functionality - the ability to swap a card at various stages (includes a Row Card Swap & Joker Card Swap)
* Save, Store, and Display High Score 
* Optimized UI Layout - enhance current game layout to focus on the main 'two' cards (the current base card, and the next) at a given stage
* 'How to Play' Instructions
* Ability to click 'New Game' to reset and begin a new game
* Bonus Stage Card Reveal / Click "Collect Bonus" to flip tables and start a new row of cards 

***

# How to Play "Card Sharp"
**Object:** Score the most points before you run out of tries. 
When the game begins, you have 3 tries.

## Board Setup:
**BASE-CARD | ROW-1 | ROW-2 | ROW-3 | ROW-4 | BONUS-CARD**

Start by predicting whether the next card (left to right) will be "higher" or "lower". If a swap is available, you can choose to swap the current card for a new card.

After you make a prediction and next card is revealed:
* If new card is a joker, collect a bonus and swap for it for a new card
* If prediction is correct, you earns points. The revealed card is now the 'base card' and play continues. 
* If prediction is incorrect, the mini-game is over and you lose a 'try'. If there are no more tries, 
the game is over. Otherwise, the player loses a try and the board resets for a new mini-game.

You will **win a game row** by making four correct predictions. In the final stage of a game row, players will 
make a bonus prediction (no swap is available, but no penalty accrued if prediction is incorrect). If the bonus prediction is correct, the player will collect a bonus of their choice!

But wait!
NOT ALL STAGES HAVE SWAPS.
NOT ALL SWAPS ARE FOR FREE.

Swaps Table:
Base Card: Player can swap once for no penalty
1st Row Card: Player can swap once for a point penalty
2nd Row Card: Player can swap once for a point penalty
3rd Row Card: Player can swap once for a point penalty
4th Row Card: Player cannot swap

Scoring/Penalty Table:
Correct Prediction: +100 points 
Correct 'Bonus Card' Prediction: +300 points or +1 Try 
Joker Bonus: +300 points or +1 Try
Swap Point Penalty: -60 points

***

## Thanks for visiting!
