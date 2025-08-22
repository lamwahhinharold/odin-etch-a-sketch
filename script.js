const gridSize = 16;
const container = document.querySelector("#container");

// create the square divs
for (let i = 0; i < gridSize * gridSize; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}

// color the square when hover
container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("square")) {
    event.target.classList.add("colored");
  }
});
