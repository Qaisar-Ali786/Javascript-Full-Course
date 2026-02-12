// What is promise
// a promise is an object representing the eventual completion or failure of an asynchronous operation.

// new Prmoise()
//  a javascript promise object that contains both the producing code and consuming code. it is usually used to deal with asynchronous operation in javascript.

// producing code mean fetching data, reading files,
// consuming code mean the code that react to the outcome .catch(), .error(), and .final()

// The promise has the three stages.
// i. pending: the promise is not yet completed or rejected
// i. reslove : fulfilled: the promise is completed.
// i. rejected : the promise is rejected

// if the promise is resolve than we have the situation or statement like .then() and .finally()
// if the promise is rejected that we have the situation statement like .then(), .finally() and catch()

// .then() method is  used to handle the successful outcomes of a promise in javascript. it takes two argument (onfulfilled, onrejected)

// catch() method return promise and deal with rejected cases only.

function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 == 0) {
      resolve(`${number} is an even number`);
    } else {
      reject(`${number} is an odd number`);
    }
  });
}
const number = 6;
checkNumber(number)
  .then((message) => {
    console.log(`successful: ${message}`);
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });

function checkSigh(number) {
  return new Promise((resolve, reject) => {
    if (number > 0) {
      resolve(`${number} is positive number`);
    } else {
      reject(`${number} is negative number`);
    }
  });
}

checkNumber(9)
  .then((msg) => {
    console.log(`successful: ${msg}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

function gettingUserData(name, callback) {
  setTimeout(() => {
    console.log("valid name");
    callback(name);
  }, 5000);
}

function gettingUserHobbies(data, callback) {
  setTimeout(() => {
    console.log(`getting ${data} hobbies`);
    callback(["football", "gardening", "hockey"]);
  }, 4000);
}

gettingUserData("Qaisar", (data) => {
  console.log(data);
  gettingUserHobbies(data, (hobbies) => {
    console.log(hobbies);
  });
});

function gettingUserData(name) {
  return new Promise((resolve) => {
    console.log("valid name");
    resolve(name);
  });
}

function gettingUserHobbies() {
  return new Promise((resolve) => {
    console.log(`getting user hobbies`);
    resolve(["football", "cricket", "basketball"]);
  });
}

gettingUserData("huxn")
  .then((name) => gettingUserHobbies(name))
  .then((hobby) => console.log(hobby))
  .catch((err) => console.log(err));


