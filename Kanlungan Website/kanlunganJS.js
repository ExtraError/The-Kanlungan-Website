const btn = document.getElementById("hamburgerBtn");
const nav = document.getElementById("navMenu");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});