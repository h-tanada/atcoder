const input = require('fs').readFileSync('/dev/stdin', 'UTF-8').split('\n');

const [N, D, H] = input.shift().split(' ');
const calc = (ufoDistance, ufoHeight) => (distance, height) => {
	const slope = (ufoHeight - height) / (ufoDistance - distance);
	return ufoHeight - slope * ufoDistance;
};
input.length = N * 1;
const calcurator = calc(D * 1, H * 1);
const maxHeight = input
	.map((line) => {
		const distance = line.split(' ')[0] * 1;
		const height = line.split(' ')[1] * 1;
		return calcurator(distance, height);
	})
	.reduce((a, b) => Math.max(a, b));
console.log(maxHeight > 0 ? maxHeight : 0);
