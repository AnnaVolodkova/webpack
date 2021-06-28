import _ from 'lodash';

import { writeLecture } from './lecture';

// import xml from './assets/data.xml';

import './styles/styles.css';

console.log('Call function from lecture.js file');
writeLecture();

// console.log('XML', xml);

let a;
console.log('Babel check', a ?? 'hello');

console.log('Optimization splitChunks example', _.union([2,1], [2, 1, 3]));
