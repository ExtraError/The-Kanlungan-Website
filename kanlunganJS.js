function initHamburger() {
  const hamburger = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove("active");
    }
  });
}

const radios = document.querySelectorAll('input[name="service"]');

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        document.querySelectorAll('.containerService')
            .forEach(container => container.classList.remove('activate'));

        radio.closest('.containerService').classList.add('activate');
    });
});