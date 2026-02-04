// FOR-EACH Method
// when we call for-each method we pass anonymous callback function that run at least one time for each each element in the array, whatever is inside the function that logic happens.

let array = [1, 2, 3, 4, 5];

array.forEach((num) => {
  if (num % 2 == 0) {
    console.log(`${num} is an even number`);
  } else {
    console.log(`${num} is an odd number`);
  }
});
