const fruits = ["apple", "banana", "mango", "orange"];
const numbers = [1, 2, 3, 4, 5];
const nestedArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
const mixedArray = ["apple", 1, "banana", 2, "mango", 3];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

console.log(nestedArray[2][2]);
console.log(nestedArray[1][1]);
console.log(nestedArray[0]);

// How to Access Properties from an Array of Objects in JavaScript
const developers = [
	{ name: "John", age: 25, languages: ["JavaScript", "Python"] },
	{ name: "Kelly", age: 37, languages: ["Ruby", "Python", "C", "C++"] },
	{ name: "Zack", age: 45, languages: ["Go", "C#"] },
]

console.log(developers[0].name);
console.log(developers[1].name);
console.log(developers[2].name);
console.log(developers[0].age);
console.log(developers[0].languages[1]);
console.log(developers[1].languages[1]);

// Find method
const myNumbers = [1, 2, 3, 4, 5];
const foundMyNumbers = myNumbers.find((number) => number > 3);
console.log(foundMyNumbers);


