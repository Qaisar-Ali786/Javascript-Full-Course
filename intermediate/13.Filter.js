// Filter() Method
// filter method create a new array containing only the elements that pass a certain text provided by a function.

const informatio = [
  { name: "Qaisar", age: 21 },
  { name: "Ali", age: 12 },
  { name: "ahmed", age: 43 },
];

const get = informatio.filter((info) => info.name == "Qaisar");
console.log(get);
const shut = informatio.filter((info) => info.age > 20);
console.log(shut);
