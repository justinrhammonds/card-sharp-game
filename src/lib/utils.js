/* eslint-disable no-unused-vars */
//apply random order to card object
function ApplyRandomOrder(card) {
  const orderedCard = card;
  orderedCard.Order = Math.random();
  return orderedCard;
}

//shuffle/sort cards
function ShuffleSort(deck) {
  const shuffled = deck.sort((a,b) => {
    if (a.Order < b.Order) return -1;
    if (a.Order > b.Order) return 1;
    return 0;
  });
  return shuffled;
}

//draw top card from deck
function DrawCard(deck) {
  return deck.shift();
}

//compare card strength based on guess
function IsCorrectGuess(baseCard, nextCard, guess) {
  if (guess === "higher") {
    return baseCard.strength > nextCard.strength ? true : false;
  }
  else {
    return baseCard.strength < nextCard.strength ? true : false;
  }
}

//prepare a new shuffled deck
function PrepareDeck(deck) {
  for (let card of deck) {
    ApplyRandomOrder(card)
  }
  return ShuffleSort(deck);
}

export { ApplyRandomOrder, ShuffleSort, DrawCard, IsCorrectGuess, PrepareDeck }
/* eslint-enable no-unused-vars*/
