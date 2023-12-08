const button = document.querySelector(".btn")

button.addEventListener("click",

function() {
console.log(document.getElementById("be").value);
})
button.addEventListener("click", () => {
console.log(document.getElementById("be").value);
})

button.onclick = () => {
console.log(document.getElementById("be").value);
}
