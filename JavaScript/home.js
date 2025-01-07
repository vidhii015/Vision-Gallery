import addToCart from "./utils.js";
import cartData from "./cart-data.js";
const product = document.querySelectorAll(
  ".product-section .products .product-item"
);

const products = document.querySelector(".product-section .products");

products.addEventListener("click", (e) => {
  let item = e.target.cloneNode(true);
  addToCart(item);
});

const newProducts = document.querySelector(".new-products");
