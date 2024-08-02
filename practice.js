function sumStrings(a, b) {
	let long = a.length >= b.length ? [...a].map(Number).reverse() : [...b].map(Number).reverse();
	let short = a.length >= b.length ? [...b].map(Number).reverse() : [...a].map(Number).reverse();
	let result = [];
	short.forEach((num, index) => {
		if (num + long[index] >= 10 && long[index + 1]) {
			long[index] = (num + long[index]) % 10;
			long[index + 1]++;
		} else if (num + long[index] >= 10 && !long[index + 1]) {
			long[index] = (num + long[index]) % 10;
			long.push(1);
		} else if (num + long[index] < 10) long[index] += num;
	});
	return long.map(String).reverse().join("");
}

console.log(sumStrings("9123", "1432"));
