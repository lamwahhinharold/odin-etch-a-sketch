const container = document.querySelector(".container");
const button = document.querySelector(".btn");

function createSquareDivs(gridSize) {
  container.replaceChildren();
  container.style.setProperty("--grid-size", gridSize);

  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

function enableHoverColoring() {
  container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("square")) {
      event.target.style.setProperty("--square-color", getRandomColor());
    }
  });
}

function setUpButton() {
  button.addEventListener("click", () => {
    const userInputGridSize = Number(
      prompt(
        "Please enter the number of squares per side for the new grid (MAX 100):"
      )
    );

    if (isNaN(userInputGridSize) || userInputGridSize <= 0) {
      alert("Please enter a valid positive number!");
    } else if (userInputGridSize > 100) {
      alert("Please enter a smaller number (MAX 100).");
    } else {
      createSquareDivs(userInputGridSize);
    }
  });
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function init() {
  createSquareDivs(16);
  enableHoverColoring();
  setUpButton();
}

init();
