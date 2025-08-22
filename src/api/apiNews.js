import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async () => {
  try {
    const response = await axios.get("/api/news", {
      params: { q: "usa" },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
