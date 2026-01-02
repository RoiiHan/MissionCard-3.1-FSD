// Toogle Icon

const toogleIcon = document.getElementById("toogle-icon");
const menu = document.querySelector(".menu");


toogleIcon.addEventListener("click", function() {
    menu.classList.toggle("active")
})

