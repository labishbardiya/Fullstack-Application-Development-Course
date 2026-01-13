const h1 = document.querySelector("h1");

h1.style.color = "green";

console.log(h1.innerText);

const h2 = document.querySelectorAll("h2");

h2.forEach(
    function(el) {
    el.style.color = "blue";
    if (el.innerText == "Labish") el.innerText = "Saksham";
    console.log(el.innerText)
});