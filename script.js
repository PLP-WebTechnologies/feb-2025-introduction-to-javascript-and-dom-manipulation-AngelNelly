// Grab elements from the page
const title = document.getElementById("main-title");
const message = document.getElementById("message");
const changeTextBtn = document.getElementById("changeTextBtn");
const changeStyleBtn = document.getElementById("changeStyleBtn");
const toggleBoxBtn = document.getElementById("toggleBoxBtn");
const boxContainer = document.getElementById("box-container");

// Change the text when button is clicked
changeTextBtn.addEventListener("click", () => {
  message.textContent = "You just changed the text, Bestie!";
    message.style.color = "#333";
    message.style.fontSize = "2rem";
});

// Change styles when button is clicked
changeStyleBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#d4a886";
  message.style.color = "white";
  message.style.fontSize = "1.5rem";
  message.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
});

// Add or remove a box when button is clicked
toggleBoxBtn.addEventListener("click", () => {
  const box = document.querySelector(".box");
  if (box) {
    box.remove(); // if box exists, remove it
  } else {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    boxContainer.appendChild(newBox);
    newBox.style.border = "2px solid #000";
  }
});
