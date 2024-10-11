function nextBigger(n) {
	let digitArray = [...String(n)].map(Number);
	let digitsNum = digitArray.length;
	for (let i = digitsNum - 1; i > 0; i--) {
		if (digitArray[i - 1] < digitArray[i]) {
			let nextSmaller = i;
			for (let j = i + 1; j < digitsNum; j++) {
				if (digitArray[j] < digitArray[i - 1] && digitArray[j] > digitArray[nextSmaller]) {
					nextSmaller = j;
				}
			}
			[digitArray[i - 1], digitArray[nextSmaller]] = [
				digitArray[nextSmaller],
				digitArray[i - 1],
			];
			let sortRight = digitArray.slice(i).sort((a, b) => b - a);
			return Number([...digitArray.slice(0, i), ...sortRight].join(""));
		}
	}
	return -1;
}

console.log(nextBigger(147));
console.log(nextBigger(741));
console.log(nextBigger(714));
console.log(nextBigger(714));
console.log(nextBigger(47690102267482));
