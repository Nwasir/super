import { getWeatherData, displayWeatherData } from "./weather.js";

const apiKey = "2fcbd37c33ec6efc3dd5e05b4eef77e6";

const weatherInfo = document.querySelector('#weather-info');
const locationInput = document.querySelector('#location');
const getWeatherButton = document.querySelector('#get-weather');

// getWeatherButton.addEventListener('click', () => {
//     const location = locationInput.value;

//     if (!location) {
//         alert('Please enter a location.');
//         return;
//     }

//     getWeatherData(location, apiKey)
//         .then(data => {
//             displayWeatherData(data, weatherInfo);
//         })
//         .catch(error => {
//             console.error('Error fetching weather data', error);
//         });
// });
[getWeatherButton].forEach(button => {
    button.addEventListener('click', () => {
        const location = locationInput.value;

        if (!location) {
            alert('Please enter a location.');
            return;
        }

        getWeatherData(location, apiKey)
            .then(data => {
                displayWeatherData(data, weatherInfo);
            })
            .catch(error => {
                console.error('Error fetching weather data', error);
            });
    });
});