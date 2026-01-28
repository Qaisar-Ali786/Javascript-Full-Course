// FUNCTIONS
// function is a block of code that perform specific tast
// function make the code reusable, you can declare it once and use it multiple times
// function make the program easier, and each small task is divided into function.

// FUNCTION DECLARATION

// function greeting(name) {
//   return `hy ${name}`;
// }
// const res = greet("Qaisar");
// console.log(res);

// // FUNCTION EXPRESSION

// const result = greet("Qaisar");
// console.log(result);

// const greet = function (name) {
//   return `hy ${name}`;
// };

// because when the compiler compile he get greet("Qaisar") and he dont comiple. further more he move down he think oh! the function is declared here and this is function expression
// __________________________________
// CALLBACK FUNCTION
// when we provide a function as an argument to another function than it is called callback function

// function get(callback) {
//   console.log("what is your name");
// }

// function hy() {
//   console.log("hy everyone");
// }
// get(hy);

// function doSomething(callback) {
//   console.log(`step1: Doing something`);
//   callback();
// }

// function Done() {
//   console.log(`step2: Done`);
// }

// doSomething(Done);

// function calculate(a, b, callback) {
//   let result = a + b;
//   callback(result);
// }

// function show(value) {
//   console.log(`so the result is`, value);
// }

// calculate(2, 5, show);

// function get(callback) {
//   console.log("Task finish");
//   callback();
// }

// function now() {
//   console.log("Done");
// }

// get(now);

// function checkNumber(a, callback) {
//   if (a % 2 == 0) {
//     callback("even");
//   } else {
//     callback("odd");
//   }
// }

// function result(value) {
//   console.log(`so the result is`, value);
// }

// checkNumber(3, result);

// function performOperation(a, b, callback) {
//   let x = a + b;
//   callback(x);
// }

// function first(value) {
//   console.log(value + 2);
// }

// function second(value) {
//   console.log(value * 10);
// }
// performOperation(3, 6, first);
// performOperation(21, 43, second);

// function reminderMe(message, callback) {
//   setTimeout(() => {
//     callback(message);
//   }, 2000);
// }

// function get(value) {
//   console.log(value.toUpperCase());
// }

// reminderMe("hy qaisar", get);

// function get(str, callback) {
//   callback(str);
// }

// function shut(value) {
//   console.log(value.toUpperCase());
// }

// function hunt(value) {
//   console.log(value.toLowerCase());
// }

// get("Qaisar", hunt);
// get("Qaisar", shut);

// function get(arr, callback) {
//   arr.forEach((num) => {
//     let x = num + 1;
//     callback(x);
//   });
// }

// function show(value) {
//   console.log(`the result is`, value);
// }
// get([1, 2, 3, 4, 5, 6, 7], show);

// function double(arr, callback) {
//   arr.forEach((num, i) => {
//     let x = num * i;
//     callback(x);
//   });
// }

// function show(value) {
//   console.log(`so the value is `, value);
// }

// double([1, 2, 3, 4, 5, 6], show);
