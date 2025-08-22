import axios from "axios";

export default async function handler(req, res) {
  try {
    const q = req.query.q || "news";
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q,
        sortBy: "publishedAt",
        language: "en",
        apiKey: process.env.NEWS_API_KEY,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error in serverless function:", error);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}
