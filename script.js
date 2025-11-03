// Typing Animation
const text = "Passionate about coding and problem-solving";
let index = 0;
function typeEffect() {
  if (index < text.length) {
    document.querySelector(".typing").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}
window.onload = typeEffect;

// Fade-in on scroll
const faders = document.querySelectorAll(".fade");
const appearOptions = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));
