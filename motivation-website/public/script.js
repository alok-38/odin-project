document.addEventListener("DOMContentLoaded", () => {
    const quoteEl = document.getElementById("quote");
    const dateEl = document.getElementById("date");
    const btn = document.getElementById("newQuoteBtn");

    // Format the date nicely
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    dateEl.textContent = formattedDate;

    // Fetch a motivational quote from your backend
    async function fetchQuote() {
        quoteEl.textContent = "Thinking of something inspiring...";

        try {
            const response = await fetch("/api/quote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt: "Give me a short, original motivational quote under 20 words."
                })
            });

            const data = await response.json();

            if (data.quote) {
                quoteEl.textContent = `"${data.quote}"`;
            } else {
                quoteEl.textContent = "You're doing great. Keep going!";
                console.warn("No quote returned from server.");
            }
        } catch (error) {
            console.error("Error fetching quote:", error);
            quoteEl.textContent = "Even when things fail, you're learning something. Try again!";
        }
    }

    btn.addEventListener("click", fetchQuote);

    // Get a quote on initial load
    fetchQuote();
});
