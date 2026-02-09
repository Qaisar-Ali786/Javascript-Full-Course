// Getting attribute

// const input = document.getElementById("name");
// const get = input.getAttribute("placeholder");
// console.log(get);
// const shut = input.getAttribute("type");
// console.log(shut);

// links
// const a = document.querySelector("a");
// const set = a.href;
// console.log(set);

// Setting attribute
const input = document.getElementById("name");
input.setAttribute("placeholder", "what is your name");
input.setAttribute("type", "password");

// for link

const a = document.querySelector("a");
a.setAttribute((a.href = "www.twitter.com"));
