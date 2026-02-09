// What is callback hell
// callback hell is a situation where multiple callback function are nested each other
// making the code harder to understand  and maintain.

// Example One
setTimeout(() => {
  console.log("hy");

  setTimeout(() => {
    console.log("helo");

    setTimeout(() => {
      console.log("how");
    }, 3000);
  }, 3000);
}, 3000);

// Example two

function callbackHell(callback) {
  setTimeout(() => {
    const data = "inside callback function";
    console.log(data);
    callback(data);
  }, 1000);
}

function firstFunction(data, callback) {
  setTimeout(() => {
    const processedOne = `${data} - processedOne`;
    console.log(processedOne);
    callback(processedOne);
  }, 2000);
}

function secondFunction(data, callback) {
  setTimeout(() => {
    const processedSecond = `${data} - processedSecond`;
    console.log(processedSecond);
    callback(processedSecond);
  });
}

callbackHell((data) => {
  firstFunction(data, (processedOne) => {
    secondFunction(processedOne, (processedSecond) => {
      console.log(`so the final result is ${processedSecond}`);
    });
  });
});
