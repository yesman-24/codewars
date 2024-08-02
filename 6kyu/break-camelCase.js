function solution(string) {
	let newString = "";
	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		if (char === char.toUpperCase() && i !== 0) {
			newString += " ";
		}
		newString += char;
	}
	return newString;
}

console.log(solution("string"));
console.log(solution("hotDogHotDogHotDigididog"));
