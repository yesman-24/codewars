function digitalRoot(n) {
	const nAsStr = n.toString();
	if (nAsStr.length === 1) {
		return n;
	}
	let sum = 0;
	for (let i = 0; i < nAsStr.length; i++) {
		sum += Number(nAsStr[i]);
	}
	return digitalRoot(sum);
}
