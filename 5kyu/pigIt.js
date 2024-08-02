function pigIt(str) {
	let pigged = "";
	str.split(" ").forEach((word, index) => {
		if (index === 0) {
			word = `${word.slice(1) + word[0]}ay`;
		} else if (index > 0 && !/[\p{P}]/u.test(word)) {
			word = `${word.slice(1) + word[0]}ay`;
			pigged += " ";
		} else if (/[\p{P}]/u.test(word)) {
			pigged += " ";
		}
		pigged += word;
	});
	return pigged;
}

// Best Solution

// function pigIt(str){
//     return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
//   }
