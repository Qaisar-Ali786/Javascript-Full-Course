// Asynchronous
// some task can run independently, without blocking the whole program.
// the program does't wait for these task to finish and continue executing the next instruction.

console.log("hy everyone");
setTimeout(() => {
  console.log("inside callback function");
}, 4000);

console.log("finish");
