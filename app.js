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


