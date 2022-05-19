const navtoggle = document.querySelector(".navtoggle");
const navmenu = document.querySelector(".navmenu");

navtoggle.addEventListener("click" , () => {
    navmenu.classList.toggle("menu-activo");
});