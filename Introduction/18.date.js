const date = new Date();
console.log(date);
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toISOString());

// GET in different Types
// how to get next and pervious date

// const date = new Date();
date.setDate(date.getDate() + 10);
console.log(date);

date.setDate(date.getDate() - 12);
console.log(date);
