// OBJECTS
// objects are data structured that allow you to store a collection of data with labels and the value of that label

const person = {
  firstName: "Qaisar",
  lastName: "Ali",
  age: 21,
};

// if you want to access item from objects there are two methods
// console.log(person.firstName); 1st method is . notation
// console.log(person.lastName);
// _________________________

// console.log(person["age"]); if we dont close the age in quotation marks the compiler think that it is a variable which is not defined.
// _________________________

// if we want to include something in object than
// person.city = "Multan";
// console.log(person);

// person.location = ["planet", "Earth"];
// console.log(person);
// ________________________

// if you want to delete something from object than use reserve keyword that is Delete
// delete person.age;
// console.log(person);
// delete person.lastName;
// console.log(person);
