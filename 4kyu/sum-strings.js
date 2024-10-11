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
