import axios from "axios";
import { SERVER_URL } from "./config";

const API_URL = `${SERVER_URL}/apis`;

export const getBanner = async () => {
  try {
    const res = await axios.get(`${API_URL}/banner.json`);
    const status = res.status.toString().charAt(0);
    if (status === "2") {
      return res.data;
    } else {
      // 처리 방식에 따라 다를거 같은데?
      console.log("API 오류");
    }
  } catch (error) {
    console.log(error);
  }
};
export const getCards = async () => {
  try {
    const res = await axios.get(`${API_URL}/cards.json`);
    const status = res.status.toString().charAt(0);
    if (status === "2") {
      return res.data;
    } else {
      console.log("API 오류");
    }
  } catch (error) {
    console.log(error);
  }
};
export const getCrew = async () => {
  try {
    const res = await axios.get(`${API_URL}/crew.json`);
    const status = res.status.toString().charAt(0);
    if (status === "2") {
      return res.data;
    } else {
      console.log("API 오류");
    }
  } catch (error) {
    console.log(error);
  }
};
export const getNews = async () => {
  try {
    const res = await axios.get(`${API_URL}/news.json`);
    const status = res.status.toString().charAt(0);
    if (status === "2") {
      return res.data;
    } else {
      console.log("API 오류");
    }
  } catch (error) {
    console.log(error);
  }
};
export const getTopSlide = async () => {
  try {
    const res = await axios.get(`${API_URL}/topslide.json`);
    const status = res.status.toString().charAt(0);
    if (status === "2") {
      return res.data;
    } else {
      console.log("API 오류");
    }
  } catch (error) {
    console.log(error);
  }
};
