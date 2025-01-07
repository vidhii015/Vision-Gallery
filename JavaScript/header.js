let sidebar = document.getElementById("sidebar");
let nav = document.getElementsByTagName("nav")[0];

sidebar.addEventListener("click", () => {
  nav.classList.toggle("show");
});

gsap.registerPlugin(ScrollTrigger);

function runGsap(params) {
  if (window.innerWidth > 760) {
    const tl = gsap.timeline();

    tl.from("header .logo", {
      y: -20,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    });

    tl.from("header nav a", {
      y: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
    });
  }
}

runGsap();
