function searchWeather() {
    const apiKey = '15d62855a8cde5311ed5b82e995e2fd3'; 
    const searchInput = document.getElementById('searchInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}`;
   
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}
function displayWeather(data) {
    const weatherDataDiv = document.getElementById('weatherData');
    weatherDataDiv.innerHTML = '';

   
    const cityName = data.name;
    const country = data.sys.country;
    const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
    const weatherDescription = data.weather[0].description;
    const icon = data.weather[0].icon;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const pressure = data.main.pressure;


   
    

    const weatherInfo = document.createElement('div');
    weatherInfo.innerHTML = `
        <h2>${cityName}, ${country}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${weatherDescription}</p>
        <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">
        <p>Humidity: ${humidity}</p>
        <p>windSpeed: ${windSpeed}</p>
        <p>pressure: ${pressure}</p>
    `;

    weatherDataDiv.appendChild(weatherInfo);
}
