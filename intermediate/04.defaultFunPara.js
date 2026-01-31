// DEFAULT FUNCTION PARAMETER (ES6)
// introduced in ECMAScript 6 allow you to assign a default value to a function parameter. when a function is called , and the argument value is not provided for parameter the default value will be used instead. this feature make it easier to handle the cases where argument might be missing or undefined.

function countTo5(count = true) {
  if (count == false) {
    for (let i = 0; i <= 5; i++) {
      console.log(`count: ${i}`);
    }
  } else {
    for (let i = 0; i <= 20; i++) {
      console.log(`count: ${i}`);
    }
  }
}

countTo5();
// so here if we dont provide argument the parameter value (count = true) act as a default value and start counting from 0 to 20

function multi(a, b = 3) {
  return a * b;
}

console.log(multi(3));
// so here b = 3 is a default value

function get(a = 23, b = 34) {
  return a * b;
}

console.log(get(2, 5));
