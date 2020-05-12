const input = 'Cheese is nice and I like it sometimes. How about you?';
const vowels = ['a', 'i', 'e', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
	for (let v = 0; v < vowels.length; v++) {
		if (input[i] === vowels[v]) {
			resultArray.push(vowels[v]);
		}
	}
	if (input[i] === 'e') {
		resultArray.push(input[i]);
	}
	if (input[i] === 'u') {
		resultArray.push(input[i]);
	}
};
console.log(resultArray.join('').toUpperCase());