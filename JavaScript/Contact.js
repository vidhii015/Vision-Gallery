gsap.registerPlugin(ScrollTrigger);

function runGsap(params) {
  if (window.innerWidth > 760) {
    gsap.from("main h1", {
      x: -60,
      opacity: 0,
      delay: 0.3,
      duration: 1,
    });

    gsap.from("main .contact-card img", {
      x: -50,
      opacity: 0,
      delay: 0.3,
      duration: 1,
    });

    gsap.from("main .contact-card .info", {
      x: 50,
      opacity: 0,
      delay: 0.3,
      duration: 1,
    });
  }
}

runGsap();
