const numbers2 = [2, 3, 4, 5, 6, 7];

function getDouble(numbers) {
	const output = [];
	for (const number of numbers) {
		const doubled = doubleIt(number);
		output.push(doubled);
	}
	return output;
}
function doubleIt(num) {
	return num * 3;
}
const doubleItNew = (num) => num * 3;
// Map Function
const makeDouble = numbers2.map(doubleIt);
const makeDouble2 = numbers2.map((num) => num * 4);
const makeDouble3 = numbers2.map((x) => x * 2);
const makeDouble5 = [2, 3, 4, 5].map((x) => x * 5);
console.log(makeDouble5);
console.log(makeDouble);
console.log(makeDouble2);
console.log(makeDouble3);
const result = getDouble(numbers2);
// console.log(result);
