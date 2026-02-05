// Find() Method
// in javascript, the find method is used on array to get the first element that matches a cretain condition.

const person = [
  { name: "Qaisar", age: 21 },
  { name: "Ali", age: 32 },
  { name: "Ahmed", age: 43 },
];

const res = person.find((pars) => pars.name === "Qaisar");
console.log(res);

// return whose come first and pass the certain condition, here in this case he will return "Qaisar", with the age of 21.

// if you want all elements than you have to use find method and if you want all elements with the required specification than you have to use filter method
