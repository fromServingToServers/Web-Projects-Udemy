const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  // use await keyword when data returns a promise
  // when using await keyword, function must have async
  const res = await fetch("https://icanhazdadjoke.com/", config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com/", config)
//     .then((response) => response.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }

jokeBtn.addEventListener("click", () => {
  generateJoke();
});
