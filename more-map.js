const numbers = [24, 56, 67, 89, 98];
const makeDevided2 = numbers.map((n) => n / 2);
const makeDevided3 = numbers.map((n) => n / 3);
const makeDevided4 = numbers.map((n) => n / 4);
// console.log(makeDevided2);
// console.log(makeDevided3);
// console.log(makeDevided4);
const friends = [
	"Rased Molla",
	"Rahul Molla",
	"Rafiqul Khan",
	"Ratonullah Khan",
];
const friendFirstLetter = friends.map((friend) => friend[0]);
const friendFirstLetter2 = friends.map((friend) => friend.length);
// console.log(friendFirstLetter);
// console.log(friendFirstLetter2);

const usedProductList = [
	{ id: 1, name: "Laptop", price: 50000 },
	{ id: 2, name: "Watch", price: 3000 },
	{ id: 3, name: "Head Phone", price: 2000 },
];
const productList2 = usedProductList.map((product) =>
	console.log(product.name)
);
const productList = usedProductList.map((product) => product.name);
console.log(productList);
