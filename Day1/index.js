const dancingText = document.getElementById("dancingText");
const successModal = document.getElementById("successModal");
const closeModal = document.getElementById("closeModal");
const submitBtn = document.getElementById("submitBtn");

dancingText.addEventListener("click", () => {
    dancingText.classList.add("shake");
    setTimeout(() => {
        dancingText.classList.remove("shake");
        showSuccessModal();
    }, 1000);
});

closeModal.addEventListener("click", () => {
    successModal.style.display = "none";
});

submitBtn.addEventListener("click", () => {
    const userName = document.getElementById("userName").value;
    if (userName.trim() !== "") {
        alert(`You've successfully accepted the ${userName} challenge!`);
        successModal.style.display = "none";
    } else {
        alert("Choose Your Challenge Language");
    }
});

function showSuccessModal() {
    successModal.style.display = "block";
}
