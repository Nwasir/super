export async function getWeatherData(location, apiKey) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export function displayWeatherData(data, element) {
    if (data.cod === '404') {
        element.innerHTML = 'Location not found.';
        return;
    }

    const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
    const weatherDescription = data.weather[0].description;

    let weatherText = `<strong>Temperature: ${temperature}°C </strong><br>`;
    weatherText += `<strong>Weather: ${weatherDescription} </strong>`;


    element.innerHTML = weatherText;
}