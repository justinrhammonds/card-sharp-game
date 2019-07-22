let cards = [];
const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
const cardNames = {
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9,
  "ten": 10,
  "jack": 11,
  "queen": 12,
  "king": 13,
  "ace": 14,
}
const jokers = [
  { suit: "hearts", name: "red-joker", value: 0 },
  { suit: "spades", name: "black-joker", value: 0 },
];

// generate deck
suits.forEach((suit) => {
  Object.keys(cardNames).forEach((name, value) => {
    cards.push({
      suit: suit,
      name: name,
      value: value
    })
  })
});

// append the jokers
cards = cards.concat(jokers)

export default cards;

