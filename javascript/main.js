const input = require('fs').readFileSync('/dev/stdin', 'UTF-8').split('');

let line = '';
let isReverse = false;

input.forEach((char) => {
	if (char === 'R') {
		isReverse = !isReverse;
	} else if (isReverse) {
		line = char + line;
	} else {
		line = line + char;
	}
});

const array = line.split('');

if (isReverse) {
	array.reverse();
}
const T = new Array();
for (const char of array) {
	if (T.length && T[T.length - 1] === char) {
		T.pop();
	} else {
		T.push(char);
	}
}

console.log(T.join(''));
