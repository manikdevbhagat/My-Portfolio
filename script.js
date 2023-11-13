function toggleMenu(){
  const menu = document.querySelector(".navbar-navlinks");
  const hamburger = document.querySelector(".hamburger-menu");
  menu.classList.toggle("open");
  hamburger.classList.toggle("open");
}