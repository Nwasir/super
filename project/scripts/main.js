import { fetchWeather } from "./weather";
import { fetchImages, initializeAnimation } from './animation.js';

document.addEventListener("DOMContentLoaded", async function () {
  const images = await fetchImages();
  initializeAnimation(images);
});


const url = `https://api.openweathermap.org/data/2.5/weather?q=Aba,Ng&units=metric&appid=2fcbd37c33ec6efc3dd5e05b4eef77e6`;
fetchWeather(url);