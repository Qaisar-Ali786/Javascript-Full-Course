// ENHANCE OBJECT LITERALS (ECMASCript)
// enhance object literals are a set of enhancement to the syntax for defining objects in javascript. These enhancement make it convenient and concise to define objects properties and methods.
// EXAMPLE:

// const name = "Qaisar";
// const last = "Ali";
// const age = 21;

// const data = {
//   name,
//   last,
//   age,
// };
// console.log(data);

// function user(name, age, work) {
//   return {
//     name,
//     age,
//     work,
//   };
// }

// const res = user("Qaisar", 21, "Student");
// console.log(res);

// function get(name, age, work) {
//   return {
//     name,
//     age,
//     work,
//     intro: function () {
//       return `my name is ${name} age is ${age} and work is ${work}`;
//     },
//   };
// }
// We are creating this function for a lot of users and a lot of users are going to provide their data like name, age, work

// const res = get("Qaisar", 32, "Business");
// console.log(res);
// console.log(res.intro());
