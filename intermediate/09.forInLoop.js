// What is For-In Loop
// in javascript is used to iterate over the enumerable properties of an object.it is way to iterate over the keys of the object.

let person = {
  name: "Qaisar",
  age: 21,
  gender: "male",
};

for (let keys in person) {
  console.log(keys, person[keys]);
}

let info = {
  location: "Muzaffargarh",
  zip: 32100,
  postal: "jagt pure",
};
for (let keys in info) {
  console.log(keys, info[keys]);
}

// so here what actually happen is for-in loop iterate over the keys like name, age, gender, so we find out the property name like name, age, gender.(in normal object we access properties of object like person["name"] but here we write person[keys] which mean get a key like name, and than internally javascript what do is write it as person["name"] and get the respective value from object) and than when we write person[keys] than first he move to the first key which is name and give the respected value which is qaisar.

let list = ["one", "Two", "three"];

for (let index in list) {
  console.log(index, list[index]);
}
