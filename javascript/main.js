const input = require('fs').readFileSync('/dev/stdin', 'UTF-8').split(' ');

let [N, K] = input;

for (let count = 0; count < K * 1; count++) {
	N = N * 1;
	if (N % 200 == 0) {
		N = N / 200;
	} else {
		N = N + '200';
	}
}

console.log(N);
