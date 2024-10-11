function equableTriangle(a, b, c) {
	const sP = (a + b + c) / 2;
	return 2 * sP == Math.sqrt(sP * (sP - a) * (sP - b) * (sP - c));
}
