import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const MODEL = process.env.GROQ_MODEL || "llama3-70b-8192";

// AI function
async function askGroq(query) {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: query,
        },
      ],
      model: MODEL,
      temperature: 0.4,
      max_tokens: 500,
    });

    return completion.choices[0]?.message?.content || null;
  } catch (err) {
    console.error("Groq Error:", err);
    return null;
  }
}

// API route
app.post("/api/search", async (req, res) => {
  const { query } = req.body;
  if (!query || !query.trim()) {
    return res.status(400).json({ error: "Missing search query." });
  }

  console.log("User search:", query);

  const answer = await askGroq(query);

  if (!answer) {
    return res.status(500).json({
      answer: "AI failed. Try again later.",
    });
  }

  res.json({ answer });
});

// Start server
app.listen(5000, () => {
  console.log("Groq AI Server running → http://localhost:5000");
});
