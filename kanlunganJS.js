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


    // CONTACT US BACKEND

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const formData = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value
        };

        const response = await fetch("https://the-kanlungan-website.onrender.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.text();
        alert(result);

    });

}




    // BACKEND BOOKING SERVICE

    const bookingForm = document.getElementById("choosingService");

    if (bookingForm) {

    bookingForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const formData = {
            service:  e.target.service.value,
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            street: e.target.streetAddress.value,
            city: e.target.cityAddress.value,
            province: e.target.provinceAddress.value,
            zipcode: e.target.zipCode.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
        };

        const response = await fetch("https://the-kanlungan-website.onrender.com/bookservice", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.text();
        alert(result);

    });

}