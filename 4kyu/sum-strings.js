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
console.log(sumStrings("50095301248058391139327916261", "81055900096023504197206408605"));
// Actual Answer
// [
//     6, 6, 8, 4, 2, 3, 4, 3, 5,
//     6, 3, 3, 5, 9, 8, 1, 8, 0,
//     4, 4, 3, 1, 0, 2, 1, 5, 0,
//     1, 3, 1
//   ]

// Result of Algorithm
// [
//     6, 6, 8, 4, 2, 3, 4, 3, 5,
//     6, 3, 3, 5, 9, 8, 1, 8, 0,
//     4, 4, 3, 1, 0, 2, 1, 5, 0,
//     1, 3, 2
//   ]
