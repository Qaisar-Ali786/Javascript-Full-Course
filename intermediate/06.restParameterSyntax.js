// What is Rest Parameter Syntax?
// rest parameter syntax allow a function to accept an indefinite number of arguments, as an array providinga way to represent a variadic functions in javascript.

function user(x, ...data) {
  console.log(x);
  console.log(data);
}

user("hy", "Qaisar", "Ali", "21", "Mz");

// if we dont add ... than it will only return "hy", that is the magic of rest operator. and if we want to add an extra parameter than we will add it before rest parameter syntax.

function person(name, age, ...location) {
  console.log(name);
  console.log(age);
  console.log(location);
}

person("Qaisar", 21, "Multan", "Muzaffargarh", "village");

// So first he will give "Qaisar" and than "Age" and than in the form of array he will give "Location"
