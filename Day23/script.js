document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        }

        const translateX = -currentIndex * 100;
        slider.style.transform = `translateX(${translateX}%)`;
    }

    prevButton.addEventListener("click", () => {
        currentIndex--;
        showSlide(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex++;
        showSlide(currentIndex);
    });

    // Initialize the slider
    showSlide(currentIndex);
});
