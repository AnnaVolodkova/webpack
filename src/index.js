import { writeLecture } from './lecture';

import './styles/styles.css';
// import xml from './assets/data.xml';

console.log('Call function from lecture.js file');
writeLecture();
// console.log('XML', xml);

let a;
console.log('Babel check', a ?? 'hello');
