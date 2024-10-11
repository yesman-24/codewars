function properFractions(n) {
	if (n == 1) return 0;
	let count = n;
	let prime = 2;

	while (prime ** 2 <= n) {
		if (n % prime == 0) {
			while (n % prime == 0) {
				n /= prime;
			}
			count -= count / prime;
		}
		prime++;
	}
	if (n > 1) {
		count -= count / n;
	}
	return count;
}
