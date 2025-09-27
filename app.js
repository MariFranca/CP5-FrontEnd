tailwind.config = {
        darkMode: 'class'
    }

openModal.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});

const btn = document.getElementById('toggle-dark');
        btn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        });

const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        },
    });
