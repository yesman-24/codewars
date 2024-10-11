function rectangleRotation(a, b) {
	return (
		(2 * Math.floor(a / 2 ** 1.5) + 1) * (2 * Math.floor(b / 2 ** 1.5) + 1) +
		2 * Math.floor(a / 2 ** 1.5 + 1 / 2) * (2 * Math.floor(b / 2 ** 1.5 + 1 / 2))
	);
}

console.log(rectangleRotation(6, 4));
