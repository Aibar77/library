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

burgerMenu.addEventListener("click", (e) => {
  let link = e.target.closest("a");
  if (!link) return;
  burgerMenu.classList.remove("active");
  burgerBtnOpen.classList.remove("active");
  body.classList.remove("active");
  burgerFilter.classList.remove("active");
});

const paginationDiv = document.querySelector(".pagination");
const slider = document.querySelector(".carousel-inner");
const carousel = document.querySelector(".carousel");
const slides = slider.querySelectorAll("img");
// next dot switch image
const dots = Array.from(paginationDiv.querySelectorAll(".btn"));
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
let currentSlide = 0;
let maxSlide = slides.length;

function checkMediaQuery() {
  slider.style.transform = `translateX(0px)`;
  currentSlide = 0;
  dots
    .find((el) => el.classList.contains("current"))
    .classList.remove("current");
  dots[currentSlide].classList.add("current");
}

// Add a listener for when the window resizes
window.addEventListener("resize", checkMediaQuery);

nextBtn.addEventListener("click", (e) => {
  // console.log(slides[currentSlide + 1].dataset.num);

  if (slides[currentSlide + 1]) {
    const translateX =
      -(Number(slides[currentSlide + 1].dataset.num) - 1) * 475;
    slider.style.transform = `translateX(${translateX}px)`;
    dots
      .find((el) => el.classList.contains("current"))
      .classList.remove("current");
    dots[currentSlide + 1].classList.add("current");
    currentSlide++;
  }
});
prevBtn.addEventListener("click", (e) => {
  if (slides[currentSlide - 1]) {
    const translateX =
      -(Number(slides[currentSlide - 1].dataset.num) - 1) * 475;
    slider.style.transform = `translateX(${translateX}px)`;
    dots
      .find((el) => el.classList.contains("current"))
      .classList.remove("current");
    dots[currentSlide - 1].classList.add("current");
    currentSlide--;
  }
});
dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const translateX = -(Number(e.target.dataset.num) - 1) * 475;
    slider.style.transform = `translateX(${translateX}px)`;
    currentSlide = Number(e.target.dataset.num) - 1;
    dots
      .find((el) => el.classList.contains("current"))
      .classList.remove("current");
    e.target.classList.add("current");
  });
});
