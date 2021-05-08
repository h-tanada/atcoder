const input = require('fs').readFileSync('/dev/stdin', 'UTF-8') * 1;

console.log(Math.floor((input - 1) / 100 + 1));
