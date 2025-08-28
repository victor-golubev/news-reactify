import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (page = 1, pageSize = 10) => {
  try {
    // const response = await axios.get("/api/news", {
    //   params: { q: "usa", page, pageSize },
    // });

    const response = await axios.get(`${BASE_URL}`, {
      params: { q: "usa", apiKey: API_KEY, page, pageSize },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return { articles: [] };
  }
};

export const getLatestNews = async (page = 1, pageSize = 10) => {
  try {
    // const response = await axios.get("/api/news", {
    //   params: { q: "usa", page, pageSize },
    // });

    const response = await axios.get(`${BASE_URL}`, {
      params: { q: "usa", apiKey: API_KEY, page, pageSize },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return { articles: [] };
  }
};

export const getCategory = async (category, page = 1, pageSize = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: { apiKey: API_KEY, q: category, page, pageSize },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return { articles: [] };
  }
};
