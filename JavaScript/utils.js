import cartData from "./cart-data.js";

cartData.forEach((item) => {
  addToCart(item);
  console.log(item);
});

function addToCart(item) {
  console.log(item.parentElement);
  let itemObj = {
    eleId: item.id,
    src: item.children[2].src,
    title: item.children[3].innerText,
    dimensions: item.children[4].innerText,
    price: {
      mrp: item.children[5].children[0].innerText,
      price: item.children[5].children[1].innerText,
    },
    offer: {
      save: item.children[6].children[0].innerText,
      off: item.children[6].children[1].innerText,
    },
  };

  cartData.push(JSON.stringify(itemObj));

  window.localStorage.setItem("cart-items", cartData.join());
}

export default addToCart;

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

// import cartData from "./cart-data.js";

// cartData.forEach((item) => {
//   addToCart(item);
// });

// function addToCart(item) {
//   let itemObj = {
//     eleId: item.id,
//     src: item.children[2].src,
//     title: item.children[3].innerText,
//     dimensions: item.children[4].innerText,
//     price: {
//       mrp: item.children[5].children[0].innerText,
//       price: item.children[5].children[1].innerText,
//     },
//     offer: {
//       save: item.children[6].children[0].innerText,
//       off: item.children[6].children[1].innerText,
//     },
//   };

//   cartData.push(JSON.stringify(itemObj));

//   window.localStorage.setItem("cart-items", cartData.join());
// }

// export default addToCart;
