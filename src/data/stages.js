let stages = [];
const stageDefaults = {
  base: 1,
  row1: 1,
  row2: 1,
  row3: 1,
  row4: 0,
  bonus: 0
};

Object.keys(stageDefaults).forEach((item, index) => {
  stages.push({
    id: index,
    name: item,
    swaps: stageDefaults[item],
    card: null
  })
});

export default stages;
