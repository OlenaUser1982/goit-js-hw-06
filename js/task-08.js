const classform = document.querySelector(".login-form");
function foo (event){
    event.preventDefault()
    const email = classform.email.value.trim();
    const password = classform.password.value.trim();
    if (email === "" || password === "") {
        alert("Заповніть всі поля")
    }
    else {
        console.log({"email": email, "password" : password});
    }
    classform.reset()
}
classform.addEventListener("submit", foo);