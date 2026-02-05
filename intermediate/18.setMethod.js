// Set Data Structure
// set is a unique data structure introduced in ES6 that let you to store only unique values of any data types and automatically ensure that no duplicate value exist and also preserve the order in which values are inserted.

// | Method          | Description                             |
// | --------------- | --------------------------------------- |
// | `add(value)`    | Adds a new value to the Set             |
// | `delete(value)` | Removes a value from the Set            |
// | `has(value)`    | Checks if a value exists in the Set     |
// | `clear()`       | Removes all values from the Set         |
// | `size`          | Returns the number of values in the Set |

const arr = [1, 2, 3, 4, 3, 2, 1];
const myset = new Set(arr);
console.log(myset);

myset.add(8);
myset.add(12);
console.log(myset);

const ourset = new Set();

ourset.add("orange");
ourset.add("apple");
ourset.add("banana");

console.log(ourset);

console.log(ourset.has("orange"));

// console.log(ourset.delete("banana"));

// console.log(ourset);

// console.log(ourset.clear());

// How iterate over the set

for (let item of ourset) {
  console.log(item);
}
