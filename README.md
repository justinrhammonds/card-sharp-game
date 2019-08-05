# Card Sharp  
Card Sharp is a made-for-web card game inspired by the classic TV game show 'Card Sharks'. Unlike the TV version, Card Sharp is played by one person. As play progresses players accumulate points for making correct predictions in hopes of achieving a high score.

***

## Technical Notes
### Pardon the mess as I am currently moving the application state into VUEX! 

This application is still under development. In the meantime, you can still try out the [Demo Version](https://justinrhammonds.github.io/card-sharp-game). The web application is built using the Vue.js front-end JavaScript framework.

## Why did I choose this game to build?
I wanted to build a card game, in part because I remember enjoying watching Card Sharks on TV as a kid, and also because my neice and nephew are really fascinated by games and programming and always enjoy watching me write code. This game is as much for them as it is for me.


## Running Demo app locally
### Run `npm install` to install packages
### Run `npm run serve` to start running the app locally   

***

## Features 
* **Card component** - SVG Splicing combined with css calc() to manage card dimensions and display
* **GameRow component** - the logic intensive component that drives the primary systems of game flow
* **GameControls component** - contains the page elements for interaction during game flow: predictions, etc.
* **SiteNav & Hud components** - site navigation, scoring, attempt, and bonus toggle
* **Scoring & Card Swaps** - scoring systems have now been implemented, as well as player's ability to swap a card
* **Fluid Layout and (Google) Fonts** - built using Flexbox and Calc to achieve ideal layout between, primarily optimized for viewport widths between 400px and 1600px
* **HowToPlay component** - "Tutorial" is work in progress. In the meantime, this section includes gameplay instructions
* **Custom Modal component** displays final score at the conclusion of each game.

## Features Planned, Not Yet Implemented
* HIGH SCORE LIST - integration with a Node API will update an all-time high score list.
* I'm planning to implement the app in Vue Native for download onto devices.
* At some point, I'd like the tutorial to be an interactive walk-through.

***

# How to Play "Card Sharp"
**Object:** Score the most points before you run out of tries. 
When the game begins, you have 4 tries.

## Board Setup:
**BASE-CARD | ROW-1 | ROW-2 | ROW-3 | ROW-4 | BONUS-CARD**

Start by predicting whether the next card (left to right) will be "higher" or "lower". If a swap is available, you can choose to swap the current card for a new card.

After you make a prediction and next card is revealed:
* If new card is a joker, collect a bonus and swap for it for a new card
* If prediction is correct, you earns points. The revealed card is now the 'base card' and play continues. 
* If prediction is incorrect, you lose one try. If there are no more tries, 
the game is over. Otherwise, the player loses a try and the board resets for a new mini-game.

You will **win a game row** by making four correct predictions. In the final stage of a game row, players will 
make a bonus prediction (no swap is available, but no penalty accrued if prediction is incorrect). If the bonus prediction is correct, the player will collect a bonus of their choice!

***Not all stages have swaps.

Swaps Table:
Base Card: Player can swap once for a point penalty
1st Row Card: Player can swap once for a point penalty
2nd Row Card: Player can swap once for a point penalty
3rd Row Card: Player can swap once for a point penalty
4th Row Card: Player cannot swap

Scoring/Penalty Table:
Correct Prediction: +100 points 
Correct 'Bonus Card' Prediction: +300 points or +1 Try 
Joker Bonus: +300 points or +1 Try
Swap Point Penalty: -50 points

***Note: A player's score will never go below 0.

***

## Thanks for visiting!
