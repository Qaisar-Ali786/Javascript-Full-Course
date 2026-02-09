const firstLi = document.querySelector("li");
console.log(firstLi);
console.log(firstLi.parentElement);
console.log(firstLi.parentElement.parentElement);

let ul = document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[2]);

console.log((ul.children[2].innerHTML = "Helo sir"));

console.log(firstLi.nextElementSibling.textContent);
const secondLi = document.querySelector(".second");
console.log(secondLi.previousElementSibling);

// styling using javascript

const h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.backgroundColor = "blue";
h1.style.textAlign = "center";
h1.style.display = "inline";
h1.textContent = "hy sir";
