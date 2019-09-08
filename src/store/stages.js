let stages = [];
const totalStages = 6;

for (let index = 0; index < totalStages; index++) {
  stages.push({
    id: index,
    swaps: index <= totalStages - 2 ? 1 : 0,
    card: null
  });
}

export default stages;
