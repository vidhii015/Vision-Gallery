const cartItems = window.localStorage.getItem("cart-items");
const wrappedData = cartItems ? `[${cartItems}]` : "[]"; // Handle empty localStorage

const parsedObjects = JSON.parse(wrappedData);

const products = document.querySelector(".new-products");

const empty = document.getElementsByClassName("empty")[0];

// Check if any items in cart
if (parsedObjects.length > 0) {
  empty.style.display = "none";
} else {
  empty.style.display = "table-row";
}

// Add products
parsedObjects.forEach((item) => {
  let newItem = document.createElement("tr");
  newItem.classList.add("product-item");
  newItem.id = item.eleId;
  newItem.innerHTML = ` <td class="item">
              <img src="${item.src}" alt="" />
              <div class="info">
                <h3>${item.title}</h3>
                <h4>${item.dimensions}</h4>
                <div class="off">
                  <h6>${item.offer.save}</h6>
                  <h6>${item.offer.off}</h6>
                </div>
              </div>
            </td>
            <td>
              <h5>${item.price.price}</h5>
            </td>
            <td>
              <div class="btns">
                <button class="decrement">-</button>
                <input type="text" name="" class="quantity" value="1" readonly />
                <button class="increment">+</button>
              </div>
            </td>
            <td><h4 class="total">${item.price.price}</h4></td>
            <td><i class="fa-solid fa-trash-can trash"></i></td>`;

  products.append(newItem);
});

// increment, decrement and trash buttons
products.addEventListener("click", (e) => {
  const target = e.target;

  if (
    target.classList.contains("increment") ||
    target.classList.contains("decrement")
  ) {
    const quantityInput = target.parentElement.querySelector(".quantity");
    const productItem = target.closest(".product-item");
    const priceElement = productItem.querySelector("td:nth-child(2) h5");
    const totalElement = productItem.querySelector(".total");

    let quantity = parseInt(quantityInput.value);
    let priceText = priceElement.textContent.trim(); // Get the price text and remove extra spaces

    // Remove "Rs." and commas
    let price = parseInt(
      priceText.replace(/Rs\./i, "").replace(/,/g, "").trim()
    );

    // increment and decrement of quantity
    if (target.classList.contains("increment")) {
      quantity += 1;
    } else if (target.classList.contains("decrement") && quantity > 1) {
      quantity -= 1;
    }

    quantityInput.value = quantity;

    // Calculate the total price
    const newTotal = (quantity * price).toLocaleString("en-IN"); // Ensure 2 decimal places
    totalElement.textContent = `Rs.${newTotal}`; // Display the price with Rupees symbol
  }

  // Remove item
  if (target.classList.contains("trash")) {
    const productItem = target.closest(".product-item");
    productItem.remove();

    // Check if no products left
    if (products.querySelectorAll(".product-item").length === 0) {
      empty.style.display = "table-row";
    }
  }
});
