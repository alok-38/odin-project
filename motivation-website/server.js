require("dotenv").config();
const express = require("express");
const path = require("path");
const rateLimit = require("express-rate-limit");
const cohere = require("cohere-ai");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

// Rate limiter middleware
const quoteLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes in milliseconds
    max: 5, // Allow a max of 5 requests per window
    message: "Too many requests, please try again later."
});

app.use("/api/quote", quoteLimiter);

// Function to fetch quote from Cohere
const fetchQuote = async (prompt, retries = 3, delay = 1000) => {
    try {
        // Correct usage of the Cohere generate method
        const response = await cohere.generate({
            model: "xlarge",  // or any other model id (e.g. "command-xlarge-nightly")
            prompt: prompt,   // The text prompt
            max_tokens: 50,   // Number of tokens to generate
            temperature: 0.7  // Creativity of the response
        });

        if (response.statusCode !== 200) {
            if (retries > 0) {
                console.log("Retrying due to error...");
                await new Promise(resolve => setTimeout(resolve, delay));
                return fetchQuote(prompt, retries - 1, delay * 2);
            }
            throw new Error(`Cohere API error: ${response.statusCode}`);
        }

        const quote = response.body.generations[0].text.trim();  // Get the generated quote
        if (!quote) {
            throw new Error("No quote returned from Cohere.");
        }

        return quote;

    } catch (err) {
        console.error("Error fetching from Cohere:", err);
        throw err;
    }
};

// POST endpoint to generate a motivational quote
app.post("/api/quote", async (req, res) => {
    const prompt = req.body.prompt || "Give me a short, original motivational quote under 20 words.";

    try {
        const quote = await fetchQuote(prompt);
        res.json({ quote });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch quote from Cohere." });
    }
});

// Fallback for 404 errors
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
