const counter = document.querySelector("#value");
const decrement = document.querySelector(`[data-action="decrement"]`)
const increment = document.querySelector(`[data-action="increment"]`)
let total = 0;
decrement.addEventListener("click", () => {
    total -= 1
 counter.textContent=total   
})
increment.addEventListener("click", () => {
    total += 1
 counter.textContent=total   
})


