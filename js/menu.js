const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("responsive");
    navMenu.classList.toggle("responsive");
}


navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("responsive");
    navMenu.classList.remove("responsive");
}

const currentLocation = location.href;
for(let i = 0; i < navLink.length; i ++){
  if(navLink[i].href === currentLocation){
    navLink[i].classList.add("active");
  }
}

