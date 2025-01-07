gsap.registerPlugin(ScrollTrigger);

function runGsap(params) {
  if (window.innerWidth > 760) {
    const tl = gsap.timeline();

    gsap.from("main h1", {
      x: -60,
      opacity: 0,
      delay: 0.3,
      duration: 1,
    });

    gsap.from(".paintings .art-fairs", {
      y: -50,
      opacity: 0,
      delay: 0.3,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".paintings .art-fairs",
        start: "top 85%",
      },
    });
  }
}

runGsap();
