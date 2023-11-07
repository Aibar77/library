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
  loginModal.classList.remove("active");
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
const logInBtn = document.querySelector(".login-btn");
const registerModal = document.querySelector(".register-modal");
const loginModal = document.querySelector(".login-modal");
const registerCloseBtn = document.querySelector("#close_btn");
const loginCloseBtn = document.querySelector(".close-login");
const signUpBtn = document.querySelector(".sign-up");
const loginTo = document.querySelector("button.login");
const buyBtns = document.querySelectorAll(".buy-btn");
buyBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let state = JSON.parse(localStorage.getItem("state"));
    if (state) {
      console.log("state is authorized");
    } else {
      window.scrollTo({
        top: 80,
        behavior: "smooth",
      });
      burgerFilter.classList.add("active");
      loginModal.classList.add("active");
      body.classList.add("active");
      updateSwappers(true);
    }
  });
});
function updateSwappers(isLogin) {
  if (isLogin) {
    const registerSwap = loginModal.querySelector(".loginM_register button");
    registerSwap.addEventListener("click", (e) => {
      loginModal.classList.remove("active");
      registerModal.classList.add("active");
      updateSwappers(false);
    });
    const loginBtn = loginModal.querySelector("input[type='submit']");
    loginBtn.addEventListener("click", (e) => {
      //todo something when login pushed btn
    });
  } else {
    const loginSwap = registerModal.querySelector("button");

    loginSwap.addEventListener("click", (e) => {
      registerModal.classList.remove("active");
      loginModal.classList.add("active");
      updateSwappers(true);
    });
  }
}
registerBtn.addEventListener("click", (e) => {
  profileMenu.classList.remove("active");
  registerModal.classList.add("active");
  updateSwappers(false);
});
logInBtn.addEventListener("click", (e) => {
  profileMenu.classList.remove("active");
  loginModal.classList.add("active");
  updateSwappers(true);
});
loginCloseBtn.addEventListener("click", (e) => {
  loginModal.classList.remove("active");
  burgerFilter.classList.remove("active");
  body.classList.remove("active");
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
  updateSwappers(false);
});
loginTo.addEventListener("click", (e) => {
  window.scrollTo({
    top: 80,
    behavior: "smooth",
  });
  burgerFilter.classList.add("active");
  loginModal.classList.add("active");
  body.classList.add("active");
  updateSwappers(true);
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
    purchases: [],
    useCard: false,
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
  let users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    users = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    localStorage.setItem("users", JSON.stringify([newUser]));
  }
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
  const logoutBtn = profileMenu.querySelector(".logout-btn");

  logoutBtn.addEventListener("click", (e) => {
    localStorage.setItem("state", "null");
    burgerFilter.classList.remove("active");
    profileMenu.classList.remove("active");
    body.classList.remove("active");
    profileMenu.innerHTML = ` <p>Profile</p>
    <button class="login-btn">Log In</button>
    <button class="register-btn">Register</button>`;
    profileIcon.innerHTML = `<svg class="profile-icon" width="28" height="28" viewBox="0 0 28 28" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="icon_profile">
              <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd"
                d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14ZM18.6667 7.77778C18.6667 10.3551 16.5774 12.4444 14.0001 12.4444C11.4227 12.4444 9.33339 10.3551 9.33339 7.77778C9.33339 5.20045 11.4227 3.11111 14.0001 3.11111C16.5774 3.11111 18.6667 5.20045 18.6667 7.77778ZM19.4998 16.2781C20.9584 17.7367 21.7778 19.715 21.7778 21.7778H14L6.22225 21.7778C6.22225 19.715 7.0417 17.7367 8.50031 16.2781C9.95893 14.8194 11.9372 14 14 14C16.0628 14 18.0411 14.8194 19.4998 16.2781Z"
                fill="white" />
            </g>
          </svg>`;
  });
}
window.addEventListener("DOMContentLoaded", (e) => {
  let state = JSON.parse(localStorage.getItem("state"));
  console.log(state, "stateeeee");

  if (!!state) {
    authorize(state.currentUser);
  }
});
console.log(
  "Решить проблему с регистрацией и логином чтобы тот же юзер не мог заново делать, а новый юзер мог добавиться к сторежу"
);
