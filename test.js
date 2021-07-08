const update = require('immutability-helper').default;
const aa = [1, 3, 5];

const bb = update(aa, {
  $splice: [
    [-1, 0],
    // [1, 0, { bg: 'aqua', category: '放这里', id: -1 }],
  ],
});
console.log(bb, 'update');
const myData = {
  x: {
    y: { z: '' },
  },
  a: { b: [] },
};

const newData = update(myData, {
  x: { y: { z: { $set: 7 } } },
  a: { b: { $push: [[9], [11]] } },
});

console.log(newData);
