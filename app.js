const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);

// 2:02:00 Share Code