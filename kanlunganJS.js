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

        const submitBtn = e.target.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector(".btn-text");
        const spinner = submitBtn.querySelector(".spinner");

        submitBtn.disabled = true;
        btnText.style.display = "none";
        spinner.style.display = "inline-block";

        const formData = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value
        };

        try {

        const response = await fetch("https://the-kanlungan-website-p4eve.eu-east-1.migetapp.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.text();
        alert(result);

        } catch (error) {

    alert("Something went wrong.");

    submitBtn.disabled = false;
    btnText.style.display = "inline";
    spinner.style.display = "none";

    } finally {
    submitBtn.disabled = false;
    btnText.style.display = "inline";
    spinner.style.display = "none";
    }

    });

    }




    // BACKEND BOOKING SERVICE

    const bookingForm = document.getElementById("choosingService");

    if (bookingForm) {

    bookingForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const submitBtn = e.target.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector(".btn-text");
        const spinner = submitBtn.querySelector(".spinner");

        submitBtn.disabled = true;
        btnText.style.display = "none";
        spinner.style.display = "inline-block";

        const formData = {
            service:  e.target.service.value,
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            street: e.target.streetAddress.value,
            city: e.target.cityAddress.value,
            province: e.target.provinceAddress.value,
            zipcode: e.target.zipCode.value,
            email: e.target.email.value,
            countryCode: e.target.countryCode.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
        };

        try {

        const response = await fetch("https://the-kanlungan-website-p4eve.eu-east-1.migetapp.com/bookservice", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.text();
        alert(result);

        } catch (error) {

        alert("Something went wrong.");

        submitBtn.disabled = false;
        btnText.style.display = "inline";
        spinner.style.display = "none";

        } finally {
        submitBtn.disabled = false;
        btnText.style.display = "inline";
        spinner.style.display = "none";
        }

    });

}



// just to make the web slow for loading screen view
const Loader = (() => {
    let loader;

    function show() {
        if (loader) return;

        loader = document.createElement("div");

        loader.innerHTML = `
            <div class="skeleton-container">
                <div class="skeleton skeleton-title"></div>

                <div class="skeleton-card">
                    <div class="skeleton skeleton-image"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text short"></div>
                </div>

                <div class="skeleton-card">
                    <div class="skeleton skeleton-image"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text short"></div>
                </div>
            </div>
        `;

        Object.assign(loader.style, {
            position: "fixed",
            inset: "0",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "999999"
        });

        const style = document.createElement("style");
        style.textContent = `
            .skeleton-container {
                width: min(90%, 500px);
            }

            .skeleton-card {
                margin-top: 20px;
            }

            .skeleton {
                border-radius: 8px;
                background: linear-gradient(
                    90deg,
                    #eeeeee 25%,
                    #f5f5f5 50%,
                    #eeeeee 75%
                );
                background-size: 200% 100%;
                animation: shimmer 1.4s infinite;
            }

            .skeleton-title {
                width: 60%;
                height: 28px;
                margin-bottom: 24px;
            }

            .skeleton-image {
                width: 100%;
                height: 180px;
                margin-bottom: 12px;
            }

            .skeleton-text {
                width: 100%;
                height: 16px;
                margin-bottom: 10px;
            }

            .skeleton-text.short {
                width: 70%;
            }

            @keyframes shimmer {
                from {
                    background-position: 200% 0;
                }
                to {
                    background-position: -200% 0;
                }
            }
        `;

        document.head.appendChild(style);
        loader.dataset.styleId = "loader-skeleton-style";

        document.body.appendChild(loader);
    }

    function hide() {
        loader?.remove();
        loader = null;
    }

    return { show, hide };
})();

Loader.show();

window.addEventListener("load", () => {
        Loader.hide();
});
