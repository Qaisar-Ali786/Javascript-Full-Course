function getUserData(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 3000);
  });
}

function getHobbies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["football", "cricket", "baskitball"]);
    }, 7000);
  });
}

async function getWholeData() {
  try {
    const name = await getUserData("Qaisar");
    console.log(name);
    const hobbies = await getHobbies();
    console.log(hobbies);
  } catch (error) {
    console.log(error);
  }
}

getWholeData();

function firstFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = `inside first function`;
      resolve(data);
    }, 2000);
  });
}

function secondFunction(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedSecond = `${data} - ProcessesSecond`;
      resolve(processedSecond);
    }, 3000);
  });
}

function thirdFunction(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedThird = `${data} - processedThird`;
      resolve(processedThird);
    }, 4000);
  });
}

async function getWhole() {
  try {
    const data1 = await firstFunction();
    console.log(data1);
    const data2 = await secondFunction(data1);
    console.log(data2);
    const data3 = await thirdFunction(data2);
    console.log(data3);
  } catch (error) {
    console.log(error);
  }
}

getWhole();
