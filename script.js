
// Responsive Navigation Bar
hamburger = document.querySelector(".navSec .navBox .logoBox img")
function hamClick() {
    items1 = document.querySelector(".navSec .navBox .items1")
    items2 = document.querySelector(".navSec .navBox .items2")
    socials = document.querySelector(".navSec .navBox .socials")
    items1.classList.toggle("active")
    items2.classList.toggle("active")
    socials.classList.toggle("active")
}