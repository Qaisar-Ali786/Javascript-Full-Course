// Spread Operator (ES6)
// is a new addition to the set of operators in js ES6. it take an iterable (e.g array) and convert it into individual elements. spread operator create a shallow copies of js object. using this operator make the code concise and expand its readability.

// function giveMe(a, b, c) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
// }
// const colors = ["red", "green", "blue"];
// giveMe(...colors);

// For Array
const str1 = ["one", "two", "three"];
const str2 = ["four", "five", "six"];
const str3 = [...str1, ...str2];
console.log(str3);

// For Objects

const obj1 = { x: 1, y: 2 };
const obj2 = { name: "Qaisar", age: 21 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
