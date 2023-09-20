const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const anonymous = (anonym) => {
    output.textContent = input.value.trim() !== "" ? anonym.currentTarget.value : "Anonymous"
}
input.addEventListener("input",anonymous)

