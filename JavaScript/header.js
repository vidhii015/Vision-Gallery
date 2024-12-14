let sidebar = document.getElementById("sidebar");
let nav = document.getElementsByTagName("nav")[0];

console.log("loaded");

sidebar.addEventListener("click", () => {
  nav.classList.toggle("show");
});
