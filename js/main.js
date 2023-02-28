const buttonMenu = document.querySelector(".burger-menu");
const navItem = document.querySelector(".nav-items-container");

console.log(navItem);

buttonMenu.addEventListener("click", () => {
  navItem.classList.toggle("nav-item-on");
  navItem.classList.toggle("nav-items-container");
});
