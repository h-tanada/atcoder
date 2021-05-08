const input = require('fs').readFileSync('/dev/stdin', 'UTF-8').split('\n');

const N = input.shift().split(' ');
input.length = N * 1;

class Member {
	constructor(number, [a, b, c, d, e]) {
		this.number = number;
		this.param = { a, b, c, d, e };
	}
	set mid(mid) {
		this.bit =
			((this.a >= mid) << 0) +
			((this.b >= mid) << 1) +
			((this.c >= mid) << 2) +
			((this.d >= mid) << 3) +
			((this.e >= mid) << 4);
	}
	get a() {
		return this.param.a || 0;
	}
	get b() {
		return this.param.b || 0;
	}
	get c() {
		return this.param.c || 0;
	}
	get d() {
		return this.param.d || 0;
	}
	get e() {
		return this.param.e || 0;
	}
}

const members = input.map(
	(line, index) =>
		new Member(
			index,
			line.split(' ').map((num) => num * 1)
		)
);

const check2 = (mid, members = new Array()) => {
	const calcMembers = members
		.map((member) => {
			member.mid = mid;
			return member;
		})
		.filter((member, index, self) => self.findIndex((elm) => elm.bit === member.bit) == index);
	return calcMembers.some((member1) =>
		calcMembers.some((member2) =>
			calcMembers.some((member3) => {
				console.table({ member1, member2, member3 });
				return (member1.bit | member2.bit | member3.bit) === 31;
			})
		)
	);
};

let min = 0,
	max = 1e9 + 1;

while (Math.abs(min - max) > 1) {
	const mid = Math.floor((min + max) / 2);
	const res = check2(mid, members);
	if (res) {
		min = mid;
	} else {
		max = mid;
	}
}
console.log(min);
