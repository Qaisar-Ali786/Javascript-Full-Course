// FOR-OFF LOOP
// for-off loop is modern iteration statement introduced in ES6.it provide a concise and easy way to loop over the elements of an iterable object like array, string, map and set. it allow you to iterate over the value of element rather than dealing with with keys, that make the code more readable and error-prons.

const person = ["Qaisar", "Ali", "Ahmed", "abuzar"];

for (let people of person) {
  console.log(people);
}
