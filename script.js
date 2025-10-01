

// Scroll reveal
const fadeEls = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });
fadeEls.forEach(el => observer.observe(el));

const cursor = document.querySelector(".cursor");
const hoverTargets = document.querySelectorAll(".cta, .card, .footer_icons i");

let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;
const speed = 0.2;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  posX += (mouseX - posX) * speed;
  posY += (mouseY - posY) * speed;
  cursor.style.transform = `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animate);
}
animate();

// Hover targets effect
hoverTargets.forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hovering");
    el.style.opacity = 0.5; // content below cursor becomes semi-transparent
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hovering");
    el.style.opacity = 1; // reset
  });
});

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
});
