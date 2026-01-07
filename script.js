gsap.registerPlugin(ScrollTrigger);

/* HERO */
gsap.from(".hero-content h1", {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-content p", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.3
});

gsap.from(".hero-content .btn", {
  scale: 0.8,
  opacity: 0,
  duration: 0.6,
  delay: 0.6
});

/* FEATURES */
gsap.from(".feature-card", {
  scrollTrigger: {
    trigger: ".features",
    start: "top 80%"
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});

/* NAVBAR SCROLL */
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});
