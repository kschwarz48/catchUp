function toggleMobileMenu() {
  document.querySelector(".mobile-nav-menu").classList.toggle("hidden");
}

document
  .querySelector(".burger-menu")
  .addEventListener("click", toggleMobileMenu);
document
  .querySelector(".mobile-nav-menu__close-btn")
  .addEventListener("click", () => toggleMobileMenu());
console.log(document.querySelector("section"));

const burger_menu = document.querySelector(".burger-menu");

burger_menu.addEventListener("click", function () {
  burger_menu.classList.toggle("is-active");
});
