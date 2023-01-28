const colors = ["green", "red", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  const randomNumber = getRandomColor();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
