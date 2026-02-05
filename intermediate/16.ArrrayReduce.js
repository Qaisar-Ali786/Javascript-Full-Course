// ARRAY REDUCE() Method
// reduce method is one of the most powerful method in javascript that takes an array and convert it into a single value.

// const number = [1, 2, 3, 4, 5];
// const result = number.reduce((p, c) => {
//   return p + c;
// }, 0);

// console.log(result);

// const people = [
//   { name: "Qaisar", age: 21 },
//   { name: "Ali", age: 32 },
//   { name: "Ahmed", age: 43 },
// ];

// const res = people.reduce((p, c) => {
//   return c.age > p ? c.age : p;
// }, 0);

// console.log(res); // 43

// const fruit = ["Apple", "Banana", "Graps", "Apple", "Banana"];

// const resu = fruit.reduce((pre, fruit) => {
//   pre[fruit] = (pre[fruit] || 0) + 1;
//   return pre;
// }, {});

// console.log(resu);

// const colors = ["red", "blue", "red", "green", "blue", "red"];

// const get = colors.reduce((cou, colors) => {
//   cou[colors] = (cou[colors] || 0) + 1;
//   return cou;
// }, {});

// console.log(get);

// const num = [1, 2, 3, 4, 5];
// const re = num.reduce((p, c) => {
//   return p + c;
// }, 0);
// console.log(re);

// const res = num.reduce((p, c) => {
//   return p * c;
// }, 1);

// console.log(res);

// const max = num.reduce((p, c) => {
//   return c > p ? c : p;
// });
// console.log(max);

// const min = num.reduce((p, c) => {
//   return c < p ? c : p;
// });
// console.log(min);

// Tasks:

// Write a function processArray(arr, callback) that applies callback on each number

// Examples of callback:

// Multiply by 2

// Square the number

// Convert number to string "Number: 3"

const cart = [
  { name: "Shirt", price: 500 },
  { name: "Pants", price: 1000 },
  { name: "Shoes", price: 1500 },
  { name: "Hat", price: 300 },
  { name: "Jacket", price: 2000 },
];

function applyDiscount(cart, callback) {
  cart.forEach((item) => {
    const newPrice = callback(item);
    console.log(`so the new price is ${item.name}: ${newPrice}`);
  });
}

function discount(item) {
  return item.price * 0.9;
}

const res = applyDiscount(cart, discount);
console.log(res);
