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

// const [a, b, c, ...d] = ["one", "Two", "three", "four", "five", "six", "seven"];

// console.log(d);

// OBJECT DESTRUCTURING
// in array destructuring order matter but the name doest matter, but in object destructuring the name matter but the order doesn't matter.

// const student = {
//   name: "Qaisar",
//   age: 21,
//   profession: "student",
// };

// const { name, profession, age } = student;
// console.log(age);
// console.log(profession);

// Renaming our variable and this will only work for objects.

// const num = {
//   x: 21,
//   y: 22,
// };

// const { x: new1, y: new2 } = num;
// console.log(new1);
// console.log(new2);

// Here we rename our variables and after remaining, if we want to extract values by using x and y we could't do so.

// Obbject destructuring and rest operator.

// const get = {
//   x: 1,
//   y: 2,
//   z: 3,
// };

// const { x, ...y } = get;
// console.log(x);
// console.log(y);

// FOR FUNCTIONS:

// const person = {
//   name: "Qaisar",
//   age,
//   work: "student",
// };

// function printInfo({ name, age = 21, work }) {
//   console.log(`Name : ${name}`);
//   console.log(`Age: ${age}`);
//   console.log(`work: ${work}`);
// }
// printInfo(person);
// so first we are taking the person as an object and than we are passing the function as an argument.

// define the items first
// let options = {
//   title: "menu",
//   items: ["pizza", "burger"],
// };

// function get({
//   title = "get",
//   width: w = 21,
//   height: h = 22,
//   items: [item1, item2] = [],
// }) {
//   console.log(`${title} ${w} ${h}`);
//   console.log(item1);
//   console.log(item2);
// }

// get(options);

// NESTED DESTRUCTURING

// const obj = [
//   { name: "Qaisar", age: 21 },
//   { name: "ali", age: 43 },
//   { name: "Ahmed", age: 23 },
// ];

// const [, { name }] = obj;
// console.log(name);
// const [, { age }] = obj;
// console.log(age);
