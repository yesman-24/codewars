function permutations(string) {
	let perms = [];
	if (string.length === 1) {
		perms.push(string);
		return perms;
	}
	for (let i = 0; i < string.length; i++) {
		const repChar = string[i];
		const remChars = string.slice(0, i) + string.slice(i + 1);
		const remCharsPerm = permutations(remChars);
		for (let perm of remCharsPerm) {
			perms.push(repChar + perm);
		}
	}

	return [...new Set(perms)];
}

console.log(permutations("bac"));
