// Every() Method
// check if all elements passes a condition. and if all the elements passed the condition return bolean value as true or false.

const people = ["Qaisar", "Ali", "John", "Alex", "Ahmed"];

const res = people.every((person) => person.length === 3);
console.log(res);
// return false because atleast one or two elements are greater than 3, if all the elements have a same length of 3 than it will return true.

// Some() Method
// check if atleast one element passes the  certain codition. if atleast one element passes the condition than it will return true.

const number = ["234", "123", "1", "3456", "23"];
const result = number.some((num) => num.length > 2);
console.log(result);
// return true because in number array there are atleast one element that passes the condition so he returns true.
