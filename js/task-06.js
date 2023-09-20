const numbers = document.querySelector("#validation-input");
function foo(number) {
    if (number.currentTarget.value.trim().length ==numbers.dataset.length) {
        numbers.classList.add("valid")
   numbers.classList.remove("invalid")     
    }
    else {
numbers.classList.add("invalid")
   numbers.classList.remove("valid")  
    }
     
}
numbers.addEventListener("blur", foo);