export const stages = [
  /*
  due to how vue's reactivity system, since I need to listen for changes downstream on value of 'card' 
  I need to set the card as a property of stage
  */
  {
    id: 0,
    name: "base",
    swaps: 1,
    card: null
  },
  {
    id: 1,
    name: "row-one",
    swaps: 1,
    card: null
  },
  {
    id: 2,
    name: "row-two",
    swaps: 1,
    card: null
  },
  {
    id: 3,
    name: "row-three",
    swaps: 1,
    card: null
  },
  {
    id: 4,
    name: "row-four",
    swaps: 0,
    card: null
  },
  {
    id: 5,
    name: "bonus",
    swaps: 0,
    card: null
  },
];

export default stages;