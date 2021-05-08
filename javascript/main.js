const input = require('fs').readFileSync('/dev/stdin', 'UTF-8').split('\n');

const N = input.shift();

const target = new Map();

const As = input.shift().split(' ');

As.length = N * 1;

As.map((A) => (A * 1) % 200).forEach((num) => {
	if (!target.has(num)) {
		target.set(num, 0);
	}
	target.set(num, target.get(num) + 1);
});

const keys = Array.from(target.keys());

let result = Array.from(target.values())
	.map((value) => (value * (value - 1)) / 2)
	.reduce((a, b) => a + b, 0);

while (keys.length > 1) {
	const a = keys.pop();
	const aCount = target.get(a);
	keys.forEach((b) => {
		const bCount = target.get(b);
		if ((a - b) % 200 == 0) {
			result += aCount * bCount;
		}
	});
}

console.log(result);
