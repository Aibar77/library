const burgerBtn = document.querySelector(".nav-open");
const burgerBtnOpen = document.querySelector(".nav-open-btn");
const burgerMenu = document.querySelector(".nav");
const body = document.querySelector("body");
const burgerFilter = document.querySelector(".burger-filter");
const navLink = document.querySelectorAll(".nav-list-link");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  burgerBtnOpen.classList.toggle("active");
  body.classList.toggle("active");
  burgerFilter.classList.toggle("active");
});
burgerFilter.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  burgerBtnOpen.classList.remove("active");
  body.classList.remove("active");
  burgerFilter.classList.remove("active");
});

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    burgerBtnOpen.classList.remove("active");
    body.classList.remove("active");
    burgerFilter.classList.remove("active");
  });
}
