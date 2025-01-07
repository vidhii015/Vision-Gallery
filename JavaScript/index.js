gsap.registerPlugin(ScrollTrigger);

function runGsap(params) {
  if (window.innerWidth > 760) {
    const tl = gsap.timeline();

    gsap.from(".hero-section .info", {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.7,
    });

    gsap.from(".hero-section img", {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.7,
    });

    gsap.from(".about-us-section .title", {
      y: -70,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".about-us-section",
        start: "top 80%",
      },
    });

    gsap.from(".about-us-section .info", {
      x: 80,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".about-us-section",
        start: "top 80%",
      },
    });

    gsap.from(".art-by-price h1", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".art-by-price h1",
        start: "top 60%",
      },
    });

    gsap.from(".art-by-shape h1", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: ".art-by-shape h1",
    });

    gsap.from(".product-section h1, .product-section .title", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      stagger: -0.3,
      scrollTrigger: {
        trigger: ".product-section h1",
        start: "top 75%",
      },
    });

    gsap.from(".product-section .products .product-item", {
      y: -50,
      opacity: 0,
      delay: 0.2,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".product-section h1",
        start: "top 75%",
      },
    });

    gsap.from(".art-section .art-by-medium h1, .art-section .art-by-size h1", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".art-section",
        start: "top 75%",
      },
    });

    gsap.from(
      ".explore-section h1, .explore-section .stories .story h2, .explore-section .stories .story a",
      {
        y: -50,
        opacity: 0,
        delay: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ".explore-section",
          start: "top 75%",
        },
      }
    );
  }
}

runGsap();
