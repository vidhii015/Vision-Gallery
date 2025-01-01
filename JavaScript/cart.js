// console.log(window.localStorage.getItem("cart-items"));
const cartItems = window.localStorage.getItem("cart-items");
const wrappedData = `[${cartItems}]`;

const parsedObjects = JSON.parse(wrappedData);

console.log(parsedObjects[0]);

const products = document.querySelector(".new-products");

parsedObjects.forEach((item) => {
  let newItem = document.createElement("div");
  newItem.id = item.eleId;
  newItem.innerHTML = `
      <img src="${item.src}" alt="" />
      <p>${item.title}</p>
      <h4>${item.dimensions}</h4>
      <div class="price">
        <strike>${item.price.mrp}</strike>
        <h5>${item.price.price}</h5>
      </div>
      <div class="off">
        <h6>${item.offer.save}</h6>
        <h6>${item.offer.off}</h6>
      </div>`;

  products.append(newItem);
});
