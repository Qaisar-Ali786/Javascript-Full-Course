// Map data structure
// map is a built-in data structure used to store data as key-value pair where both keys and values can be any data type.
// in object we store data as key-value where both key and value are string and if not js automatically convert it into string, but in map data structure we can store key-value in any data type like object, arrays, function ets.
// map also preserve the order of insertion.

// we cannot set values separately in map, we have to set a key with value by using map.sep(key, value)

// Methods of map data structure.

// map.set(key, value);   // add or update
// map.get(key);          // read value
// map.has(key);          // check key
// map.delete(key);       // remove key
// map.clear();           // remove all
// map.size;              // number of entries

const map = new Map();
const keyOne = function () {};
const keyTwo = [1, 2, 3, 4];
const keyThree = "hellow everyone";

map.set(keyOne, "value of keyOne");
map.set(keyTwo, "value of keyTwo");
map.set(keyThree, "value of keyThree");

console.log(map);

console.log(map.keys());
console.log(map.values());
console.log(map.get(keyOne));
console.log(map.get(keyThree));

console.log(map.has(keyTwo));

// console.log(map.delete(keyOne));
// console.log(map);

console.log(map.size);

// console.log(map.clear());

// How to iterate over map data structure

for (let [key, value] of map) {
  console.log(key, value);
}

for (let keys of map.keys()) {
  console.log(keys);
}

for (let values of map.values()) {
  console.log(values);
}
// const arr = [2, 3, 4, 5];
// for (let i of arr) {
//   console.log(i);
// }
