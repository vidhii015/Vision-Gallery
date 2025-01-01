// // Initialize Swiper

// var swiper = new Swiper(".mySwiper", {
//   loop: true,
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
// var swiper2 = new Swiper(".mySwiper2", {
//   loop: true,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
//   },
// });

// // button js

// let buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     button.classList.toggle("active");
//   });
// });

// // WISHLIST icon js

// let wishlistIcon = document.querySelector(".wishlist-icon");

// wishlistIcon.addEventListener("click", () => {
//   wishlistIcon.style.color = "#f9211f";
// });

const product = document.querySelectorAll(
  ".product-section .products .product-item"
);

const newProducts = document.querySelector(".new-products");
console.log(newProducts);

product.forEach((p, index) => {
  p.addEventListener("click", () => {
    let newItem = ` <div class="product-item" id="${p.id}">
      <div class="tag-2">Sold</div>
      <img src="${p.children[2].src}" alt="" />
      <p>${p.children[3].innerText}</p>
      <h4>${p.children[4].innerText}</h4>
      <div class="${p.children[5].classList.value}">
        <strike>${p.children[5].children[0].innerText}</strike>
        <h5>${p.children[5].children[1].innerText}</h5>
      </div>
      <div class="${p.children[6].classList.value}">
        <h6>${p.children[6].children[0].innerText}</h6>
        <h6>${p.children[6].children[1].innerText}</h6>
      </div>
    </div>;`;

    newProducts.append(newItem);
  });
});
