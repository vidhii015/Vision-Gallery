import addToCart from "./utils.js";
import cartData from "./cart-data.js";

const cartBtns = document.querySelectorAll(
  ".product-section .products .product-item .cart-btn"
);

cartBtns.forEach((cartBtn) => {
  cartBtn.addEventListener("click", (e) => {
    let item = e.target.closest(".product-item").cloneNode(true); // Clone the entire product-item
    addToCart(item); // Pass the cloned item to addToCart
  });
});
