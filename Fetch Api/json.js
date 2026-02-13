const result = document.querySelector(".result");

async function get() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw Error(response.statusText);
    const data = await response.json();
    result.innerHTML = data.name;
  } catch (error) {
    console.log(error);
  }
}

get();

fetch("data.json")
  .then((res) => {
    if (!res.ok) throw Error(res.statusText);
    return res.json();
  })
  .then((data) => {
    result.textContent = data.roll;
  })
  .catch((err) => console.log(err));
