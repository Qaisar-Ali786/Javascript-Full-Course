// What is destructuring?
// destructuring allow us to unpack values form data-structure (arrays, objects) into separate distinct variables.

// With array

// const food = ["bread", "vegetable", "Milk", "rice"];
// const [one, two, three, four] = food;
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);

// const fruits = ["apple", "orange", "banana", "graps"];
// const [helo, hy, why, how] = fruits;
// console.log(helo);
// console.log(hy);
// console.log(why);
// console.log(how);

// So here we are declaring helo, hy, why, how as a variable and storing apple, orange, banana, and graps as the value of that variable.

// FOR Default

// let a, b;

// [a = 5, b = 6] = ["one", "two"];
// console.log(a);
// console.log(b);

// so here 5 and 6 are default values, and if after equal the brackets are empty than he will return 5 and 6

// FOR FUNCTIONS

// function fb() {
//   return [1, 2, 3, 4];
// }

// let a, b, c, d;
// [a, b, c, d] = fb();
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// How ignore some return value form a function.

// function fn() {
//   return [2, 3, 4, 5];
// }
// const [a, , b, c] = fn();
// console.log(a);
// console.log(b);
// console.log(c);

// So here we are using space to ignore value and we ignore 3. it will only work with array destructuring not object.

// How assign the rest of array items to a variable

const [a, b, c, ...d] = ["one", "Two", "three", "four", "five", "six", "seven"];

console.log(d);
