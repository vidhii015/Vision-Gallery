let sidebar = document.getElementById("sidebar");
let nav = document.getElementsByTagName("nav")[0];

sidebar.addEventListener("click", () => {
  nav.classList.toggle("show");
});
