function score(dice) {
	var score = 0;
	var outcomes = [1, 2, 3, 4, 5, 6];
	let hash = () => {
		let result = {};
		outcomes.forEach((outcome) => {
			result[outcome] = dice.filter((die) => die === outcome).length;
		});
		return result;
	};
	let hashMap = hash();
	score += hashMap[1] >= 3 ? 1000 + (hashMap[1] - 3) * 100 : hashMap[1] * 100;
	score += hashMap[5] >= 3 ? 500 + (hashMap[5] - 3) * 50 : hashMap[5] * 50;
	score += hashMap[2] >= 3 ? 200 : 0;
	score += hashMap[3] >= 3 ? 300 : 0;
	score += hashMap[4] >= 3 ? 400 : 0;
	score += hashMap[6] >= 3 ? 600 : 0;
	return score;
}

// Best Solution
// function score(dice) {
// 	var dc = [0, 0, 0, 0, 0, 0];
// 	var tdr = [1000, 200, 300, 400, 500, 600];
// 	var sdr = [100, 0, 0, 0, 50, 0];
// 	dice.forEach(function (x) {
// 		dc[x - 1]++;
// 	});
// 	return dc.reduce(function (s, x, i) {
// 		return s + (x >= 3 ? tdr[i] : 0) + sdr[i] * (x % 3);
// 	}, 0);
// }
