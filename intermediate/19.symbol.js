// What is symbol?
// a symbol is a permitive data type that represent a unique and immutable identifier.
// it is often used as an identifier for object properties to avoid naming conflict.
// When a symbol is created , it is unique and cannot be recreated or changed.
// this uniqueness ensure that symbol will not collide with other properties name even they have the same string representation.
// symbol also store only unique values.

const mysymbol = Symbol();

const symbol1 = Symbol("name");
const symbol2 = Symbol("name");

// console.log(symbol1 === symbol2);
// return false.

const huxn = {};
huxn.age = 21;
huxn["gender"] = "male";
huxn["gender"] = "female";
huxn[symbol1] = "ali";
huxn[symbol2] = "ahmed";
console.log(huxn);
