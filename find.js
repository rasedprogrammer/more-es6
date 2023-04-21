const numbers = [23, 45, 75, 83, 25, 64, 54, 34, 89, 90, 15];
const devidedNumber5 = numbers.find((num) => num % 5 === 0);
const devidedNumber5All = numbers.filter((num) => num % 5 === 0);
console.log(devidedNumber5);
console.log(devidedNumber5All);
const usedProductList = [
	{ id: 1, name: "Laptop", price: 50000 },
	{ id: 2, name: "Watch", price: 3000 },
	{ id: 3, name: "Head Phone", price: 2000 },
];
const priceList = usedProductList.find((price) => price.price > 5000);
console.log(priceList);
