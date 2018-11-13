const h3El = document.querySelector("h3");
const color1El = document.querySelector(".color1");
const color2El = document.querySelector(".color2");
const body = document.getElementById("gradient");
const btn = document.querySelector("button");

body.style.background = `linear-gradient(to right, ${color1El.value}, ${color2El.value})`;
h3El.textContent = body.style.background + ";";

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1El.value}, ${color2El.value})`;
  h3El.textContent = body.style.background + ";";
}

function randomNum() {
  return Math.floor(Math.random() * 255);
}

function randomColor() {
  return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
}

btn.addEventListener("click", () => {
  body.style.background = `linear-gradient(to right, ${randomColor()}, ${randomColor()}`;
  h3El.textContent = body.style.background + ";";
});

color1El.addEventListener("input", setGradient);

color2El.addEventListener("input", setGradient);
