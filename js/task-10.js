function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btn = document.querySelectorAll("button");
const boxes = document.querySelector("#boxes");
function createBoxes(amount) {
  const fragment = document.createDocumentFragment(); // С-ємо фрагмент
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = 30 + i * 10 + "px";
    div.style.height = 30 + i * 10 + "px";
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  } // Додаю div до фрагменту  
  boxes.innerHTML = "";
  boxes.appendChild(fragment); // Вставляємо фрагмент у контейнер}
  input.addEventListener("input", createBoxes);
}
function creatBtn(event) {
  event.preventDefault();  const nothing = input.value;
  const anything = parseInt(nothing, 10);  if (anything) {
    createBoxes(anything);  }
}
btn[0].addEventListener("click", creatBtn);
function destroyBtn(event) {
  event.preventDefault();
  boxes.innerHTML = "";}
btn[1].addEventListener("click", destroyBtn);
