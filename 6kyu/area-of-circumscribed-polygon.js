function areaOfPolygonInsideCircle(r, n) {
	return Math.round(0.5 * n * r ** 2 * Math.sin((2 * Math.PI) / n) * 1000) / 1000;
}
