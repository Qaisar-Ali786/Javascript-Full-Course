// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => {
//     if (!res.ok) throw Error(res.statusText);
//     return res.json();
//   })
//   .then((data) => {
//     document.querySelector(".id").innerHTML = data.id;
//     document.querySelector(".title").innerHTML = data.title;
//     document.querySelector(".body").innerHTML = data.body;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const btn = document.querySelector(".btn");
// btn.addEventListener("click", makeRequest);

// function makeRequest() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       if (!res.ok) throw Error(res.statusText);
//       return res.json();
//     })
//     .then((data) => {
//       const outPut = document.querySelector(".all-posts");
//       data.forEach((element) => {
//         outPut.innerHTML += `
//         <div>${element.id}</div>
//         <div>${element.title}</div><br>
//         <div>${element.body}</div>
//         <hr>

//         `;
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

btn.addEventListener("click", get);
async function get() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw Error(response.statusText);
  const data = await response.json();
  data
    .forEach((element) => {
      const output = document.querySelector(".all-posts");
      output.innerHTML += `
    <div>${element.id}</div>
    <div>${element.title}</div><br>
    <div>${element.body}<div>
    <hr>
    
    `;
    })
    .catch((err) => {
      console.log(err);
    });
}
