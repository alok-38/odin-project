let a, b, rest;
[a, b] = [10, 20];
console.log(a, b);
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);

const array = [100, 200, 300];
const [a1, b1] = array;

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y);
console.log(z);

// Similarly, you can destructure objects on the left-hand side of the assignment.
const obj = { a: 1, b: 2 };
const { obj1, obj2 } = obj;
console.log(obj1, obj2);

