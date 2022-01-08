function toggleMobileMenu() {
  document.querySelector(".mobile-nav-menu").classList.toggle("is-active");
  document.querySelector(".header__button").classList.toggle("is-active");
  document.querySelector(".mobile__toggle").classList.toggle("is-active");
  document
    .querySelector(".mobile__nav__link.home")
    .classList.toggle("is-active");
}

document
  .querySelector(".burger-menu")
  .addEventListener("click", toggleMobileMenu);
document
  .querySelector(".mobile-nav-menu__close-btn")
  .addEventListener("click", () => toggleMobileMenu());
console.log(document.querySelector("section"));
