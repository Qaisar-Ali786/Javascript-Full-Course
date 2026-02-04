// Map() method
// map method create a new array by applying functionality to the element of original array
// .it does't change the original array
// . it return new array

let number = [1, 2, 3, 4, 5];
const double = number.map((num) => num + 1);
console.log(double);

const even = number.map((num) => {
  if (num % 2 == 0) {
    console.log(`${num} is an even number`);
  } else {
    console.log(`${num} is an odd number`);
  }
});

console.log(even);
