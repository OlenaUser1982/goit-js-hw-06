const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
range.value = parseInt(getComputedStyle(text).fontSize)

range.addEventListener("input", () => {
    text.style.fontSize = `${range.value}px`
    
})



