function totalIncDec(x) {
	if (x == 0) return 1;

	function combination(n, r) {
		if (r > n) return 0n;
		if (r === 0n || r === n) return 1n;
		let num = 1n;
		let denom = 1n;
		for (let i = 0n; i < r; i++) {
			num *= n - i;
			denom *= i + 1n;
		}
		return num / denom;
	}

	let temp = 2n * combination(BigInt(9 + x), BigInt(x)) - 10n;
	let multiplier = -1n;
	for (let i = x - 1; i >= 0; i--) {
		temp += combination(BigInt(9 + x), BigInt(i)) * multiplier;
		multiplier *= -1n;
	}

	return Number(temp + BigInt(totalIncDec(x - 1)));
}
