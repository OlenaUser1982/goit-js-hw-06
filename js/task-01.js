const catagories = document.querySelectorAll("li.item");
console.log("Number of categories:", catagories.length);

catagories.forEach(function (elem) {
    const list = elem.querySelector("h2")
    const listElem = elem.querySelectorAll("li")
    console.log("Category:", list.textContent);
    console.log("Elements:", listElem.length);
})

