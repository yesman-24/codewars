function pointsNumber(radius) {
	let result = 4 * radius + 1;
	for (let i = -radius; i < 0; i++) {
		result += 4 * Math.floor(Math.sqrt(radius ** 2 - i ** 2));
	}
	return result;
}
