// Mendapatkan elemen hamburger dan menu-bar
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () =>{
    menuList.classList.toggle("hidden");
})