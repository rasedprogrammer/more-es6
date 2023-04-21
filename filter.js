const numbers = [23, 45, 75, 83, 25, 64, 54, 34, 89, 90, 15];
const bigNums = numbers.filter((number) => number > 50);
const smallNums = numbers.filter((number) => number < 50);
const evenNums = numbers.filter((number) => number % 2 === 0);
console.log(bigNums);
console.log(smallNums);
console.log(evenNums);

const usedProductList = [
	{ id: 1, name: "Laptop", price: 50000 },
	{ id: 2, name: "Watch", price: 3000 },
	{ id: 3, name: "Head Phone", price: 2000 },
];
const highPrice = usedProductList.filter((product) => product.price > 10000);
const lowPrice = usedProductList.filter((product) => product.price < 100000);
console.log(highPrice);
console.log(lowPrice);
