function solve(a, b) {
	var endpoints = [89, 145, 42, 20, 4, 16, 37, 58];
	var primes = [];
	var count = 0;
	var aNotOne = a === 1 ? a + 1 : a;
	for (let i = aNotOne; i < b; i++) {
		if (helperIsPrime(i)) {
			primes.push(i);
		}
	}
	primes.forEach((prime) => {
		if (helperSquareSum(prime) === 1) {
			count++;
		}
	});
	// Check if prime
	function helperIsPrime(num) {
		if (!Number.isInteger(num)) {
			return false;
		}
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	}

	// Check sum if 1 or in endpoints
	function helperSquareSum(num) {
		let sum = 0;
		if (num === 1) return num;
		if (endpoints.includes(num)) {
			return num;
		}
		num.toString()
			.split("")
			.forEach((digit) => {
				sum += Number(digit) ** 2;
			});
		return helperSquareSum(sum);
	}
	return count;
}

console.log(solve(1, 25));
console.log(solve(100, 1000));
console.log(solve(100, 2000));
console.log(solve(100, 3000));
console.log(solve(100, 4000));
