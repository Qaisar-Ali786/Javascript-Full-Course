// ---------------------------------------
// const obj = fetch("text.txt");
// obj
//   .then((res) => {
//     return res.text();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ---------------------------------------

// ---------------------------------------
// Removing Clutters
// fetch("text.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// ---------------------------------------

// ---------------------------------------
// Handling Errors
// -> Fetch API promise only rejects when we have network error (not in other cases).

// This is not a network error 👇
// fetch("texxxxxt.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// ---------------------------------------

// ---------------------------------------
// Handling Errors (Real Code)

// fetch("text.txt")
//   .then((res) => {
//     if (!res.ok) throw res.statusText;
//     return res.text();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// ---------------------------------------

// ---------------------------------------
// Displaying Results to the (browser)

const result = document.querySelector(".result");

// fetch("text.txt")
//   .then((res) => {
//     if (!res.ok) throw res.statusText;
//     return res.text();
//   })
//   .then((data) => (result.innerHTML = data))
//   .catch((err) => console.log(err));
// ---------------------------------------

// ---------------------------------------
// Using async/await (without Error Handling)
// const result = document.querySelector(".result");

// async function readData() {
//   try {
//     const response = await fetch("text.txt");
//     const data = await response.text();
//     console.log(data);
//     result.innerHTML = data;
//   } catch (error) {
//     console.log(err);
//   }
// }

// readData();
// ---------------------------------------

// ---------------------------------------
// Using async/await (With Error Handling)
// const result = document.querySelector(".result");

// async function readData() {
//   try {
//     const response = await fetch("text.txt");
//     if (!response.ok) return response.statusText;
//     const data = await response.text();
//     result.innerHTML = data;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// readData();
