// const h1 = document.createElement("h1");
// const body = document.body;
// h1.textContent = "new one";
// body.appendChild(h1);

// const ul = document.querySelector("ul");
// const secondLi = document.querySelector(".second");
// const newLi = document.createElement("li");
// newLi.textContent = "i am new one";

// ul.appendChild(newLi);
// ul.insertBefore(newLi, secondLi);

// // const p = document.querySelector(".p");
// const li = document.createElement("li");
// li.textContent = "hy everyone";
// li.style.color = "green";

// p.appendChild(li);
// p.insertAdjacentElement("afterend", li);

const container = document.querySelector(".container");
container.textContent = "hellow g welcome to the show";
const p = document.createElement("p");
p.textContent = "i am new paragraph";

container.append(p);
