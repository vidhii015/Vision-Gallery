// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// button js

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
  });
});

// WISHLIST icon js

let wishlistIcon = document.querySelector(".wishlist-icon");

wishlistIcon.addEventListener("click", () => {
  wishlistIcon.style.color = "#f9211f";
});
