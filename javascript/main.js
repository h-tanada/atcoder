const input = require('fs').readFileSync('/dev/stdin', 'UTF-8');
console.log(input.split('ZONe').length - 1);