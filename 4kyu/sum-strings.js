function sumStrings(a, b) {
	let long = a.length >= b.length ? [...a].map(Number) : [...b].map(Number);
	let short = a.length >= b.length ? [...b].map(Number) : [...a].map(Number);
	let carry = 0;
	for (let digit in short.reverse()) {
	}
}

console.log(sumStrings("9123", "1432"));
