const quoteContainer = document.getElementById("quote");
const generateButton = document.getElementById("generate");

async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const { content, author } = data;
        quoteContainer.innerHTML = `<p>"${content}"</p><p>- ${author}</p>`;
    } catch (error) {
        console.error("Error fetching a quote:", error);
        quoteContainer.textContent = "Failed to fetch a quote. Please try again later.";
    }
}

generateButton.addEventListener("click", fetchQuote);

// Initial quote generation
fetchQuote();
