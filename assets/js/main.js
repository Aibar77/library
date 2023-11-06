const burgerBtn = document.querySelector(".nav-open");
const burgerBtnOpen = document.querySelector(".nav-open-btn");
const burgerMenu = document.querySelector(".nav");
const body = document.querySelector("body");
const burgerFilter = document.querySelector(".burger-filter");
const navLink = document.querySelectorAll(".nav-list-link");
// localStorage.setItem(
//   "state",
//   JSON.stringify({
//     currentUser: null,
//     state: false,
//   })
// );
burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  burgerBtnOpen.classList.toggle("active");
  if (!profileMenu.classList.contains("active")) {
    body.classList.toggle("active");
    burgerFilter.classList.toggle("active");
  }

  profileMenu.classList.remove("active");
});
burgerFilter.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  burgerBtnOpen.classList.remove("active");
  body.classList.remove("active");
  profileMenu.classList.remove("active");
  registerModal.classList.remove("active");
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

// favourites section

const radioButtons = document.querySelectorAll("input[name='season']");
const seasonsBooks = Array.from(document.querySelectorAll(".books"));

radioButtons.forEach((btn) => {
  btn.addEventListener("change", (e) => {
    const currentWatch = seasonsBooks.find(
      (el) => !el.classList.contains("hidden")
    );
    currentWatch.classList.add("hidden");

    seasonsBooks[+e.target.dataset.season].classList.remove("hidden");
  });
});
//profile
const profileIcon = document.querySelector(".header-right-profile");
const profileMenu = document.querySelector(".profile-menu");
profileIcon.addEventListener("click", (e) => {
  if (!burgerMenu.classList.contains("active")) {
    body.classList.toggle("active");
    burgerFilter.classList.toggle("active");
  }
  profileMenu.classList.toggle("active");
  burgerMenu.classList.remove("active");
  burgerBtnOpen.classList.remove("active");
});
// register modal
const registerBtn = document.querySelector(".register-btn");
const registerModal = document.querySelector(".register-modal");
const registerCloseBtn = document.querySelector("#close_btn");
const signUpBtn = document.querySelector(".sign-up");
registerBtn.addEventListener("click", (e) => {
  profileMenu.classList.remove("active");
  registerModal.classList.add("active");
});
registerCloseBtn.addEventListener("click", (e) => {
  registerModal.classList.remove("active");
  burgerFilter.classList.remove("active");
  body.classList.remove("active");
});
signUpBtn.addEventListener("click", (e) => {
  window.scrollTo({
    top: 100,
    behavior: "smooth",
  });
  burgerFilter.classList.add("active");
  registerModal.classList.add("active");
  body.classList.add("active");
});

const registerForm = document.querySelector("#register-form");

function generateRandomHexCardNumber() {
  const cardNumberLength = 9; // Длина номера карты (9 цифр)
  let cardNumber = "";

  for (let i = 0; i < cardNumberLength; i++) {
    // Генерируем случайную шестнадцатеричную цифру (0-9 и A-F)
    const randomHexDigit = Math.floor(Math.random() * 16);
    cardNumber += randomHexDigit.toString(16).toUpperCase();
  }

  return cardNumber;
}
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  registerModal.classList.remove("active");
  burgerFilter.classList.remove("active");
  body.classList.remove("active");
  const fNameInput = registerForm.querySelector("#fname");
  const lNameInput = registerForm.querySelector("#lname");
  const emailInput = registerForm.querySelector("#e-mail");
  const pwsInput = registerForm.querySelector("#password");
  const cardNumber = generateRandomHexCardNumber();
  const newUser = {
    "first-name": fNameInput.value,
    "last-name": lNameInput.value,
    email: emailInput.value,
    password: pwsInput.value,
    "card-number": cardNumber,
    visits: 1,
  };

  authorize(newUser);
  localStorage.setItem(
    "state",
    JSON.stringify({
      currentUser: newUser,
      state: true,
    })
  );
  localStorage.setItem(newUser.password, JSON.stringify(newUser));
});
// after sign-up state
function authorize(user) {
  let isNew = localStorage.getItem(user.password);
  console.log(JSON.parse(isNew));

  let userIcon = user["first-name"][0] + user["last-name"][0];
  profileIcon.innerHTML = `<div class='profile-icon authorized' title="${
    user["first-name"] + " " + user["last-name"]
  }">${userIcon}</div>`;
  profileMenu.innerHTML = `<p>${user["card-number"]}</p>
    <button class="myprofile-btn">My profile</button>
    <button class="logout-btn">Log Out</button>`;
}
window.addEventListener("DOMContentLoaded", (e) => {
  let state = JSON.parse(localStorage.getItem("state"));
  if (!!state) {
    authorize(state.currentUser);
  }
});
