function toggleMobileMenu() {
  document.querySelector(".mobile-nav-menu").classList.toggle("is-active");
}

document
  .querySelector(".burger-menu")
  .addEventListener("click", toggleMobileMenu);
document
  .querySelector(".mobile-nav-menu__close-btn")
  .addEventListener("click", () => toggleMobileMenu());
console.log(document.querySelector("section"));
