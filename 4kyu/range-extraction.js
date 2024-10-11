function solution(list) {
	let endpoints = [];
	let result = [];
	for (let i = 0; i < list.length; i++) {
		if (
			(list[i] - 1 == list[i - 1] && list[i + 1] - 1 != list[i]) ||
			(list[i] - 1 != list[i - 1] && list[i + 1] - 1 == list[i]) ||
			(list[i] - 1 != list[i - 1] && list[i + 1] - 1 != list[i])
		) {
			endpoints.push(i);
		}
	}
	for (let i = 0; i < endpoints.length; i++) {
		if (endpoints[i] + 1 == endpoints[i + 1] || typeof endpoints[i + 1] === "undefined") {
			result.push(String(list[endpoints[i]]));
		} else {
			result.push(String(`${list[endpoints[i]]}-${list[endpoints[i + 1]]}`));
			i++;
		}
	}
	return result.join(",");
}
