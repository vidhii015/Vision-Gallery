gsap.registerPlugin(ScrollTrigger);

function runGsap(params) {
  if (window.innerWidth > 760) {
    const tl = gsap.timeline();

    gsap.from("footer .footer-center", {
      y: -50,
      opacity: 0,
      delay: 0.2,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "footer",
        start: "top 75%",
      },
    });

    gsap.from("footer .footer-bottom p", {
      x: -80,
      opacity: 0,
      delay: 0.2,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "footer",
        start: "top 55%",
      },
    });

    gsap.from("footer .footer-bottom .socials", {
      x: 80,
      opacity: 0,
      delay: 0.2,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "footer",
        start: "top 55%",
      },
    });
  }
}

runGsap();
