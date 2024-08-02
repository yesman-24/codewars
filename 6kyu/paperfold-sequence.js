function* paperFold() {
	let base = [];
	let i = 1;
	let j = 0;
	while (true) {
		if (i % 4 === 1) {
			base.push(1);
			i++;
		} else if (i % 4 === 3) {
			base.push(0);
			i++;
		} else if (i % 4 === 0 || i % 4 === 2) {
			base.push(base[j]);
			j++;
			i++;
		}
		yield base[base.length - 1];
	}
}
