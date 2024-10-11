function factorial(n) {
	let result = "1";
	if (n < 0) return "";
	if (n == 0 || n == 1) return "1";
	function sumStrings(a, b) {
		let aReduc = a === "" || Number(a) === 0 ? "0" : a.replace(/^0+/, "");
		let bReduc = b === "" || Number(b) === 0 ? "0" : b.replace(/^0+/, "");
		let longer =
			aReduc.length > bReduc.length
				? [...aReduc].map(Number).reverse()
				: [...bReduc].map(Number).reverse();
		let shorter =
			aReduc.length > bReduc.length
				? [...bReduc].map(Number).reverse()
				: [...aReduc].map(Number).reverse();
		let sumArray = [];
		let carry = 0;
		longer.forEach((digit, index) => {
			let sum = digit + (shorter[index] || 0) + carry;
			sumArray.push(sum % 10);
			carry = Math.floor(sum / 10);
		});
		if (carry > 0) {
			sumArray.push(carry);
		}
		return sumArray.map(String).reverse().join("");
	}
	for (let i = 1; i <= n; i++) {
		let temp = result;
		for (let j = 1; j < i; j++) {
			result = sumStrings(result, temp);
		}
	}
	return result;
}
