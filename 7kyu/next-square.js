function findNextSquare(sq) {
	return Math.floor(sq ** 0.5) == sq ** 0.5 ? (sq ** 0.5 + 1) ** 2 : -1;
}
