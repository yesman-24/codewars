function towerBuilder(nFloors, nBlocksz) {
	let floor = Array.apply(null, Array(nBlocksz[1]));
	let tower = [];
	for (i = 1; i <= nFloors; i++) {
		floor.fill(
			" ".repeat(nBlocksz[0] * (nFloors - i)) +
				"*".repeat(nBlocksz[0] * (2 * i - 1)) +
				" ".repeat(nBlocksz[0] * (nFloors - i))
		);
		tower.push(...floor);
	}
	return tower;
}

console.log(towerBuilder(1, [1, 1]));
console.log(towerBuilder(3, [1, 1]));
console.log(towerBuilder(3, [2, 3]));
