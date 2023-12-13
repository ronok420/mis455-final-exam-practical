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


    const body = document.body;
    const weatherCondition = data.weather[0].main.toLowerCase();
    console.log(weatherCondition);

    switch (weatherCondition) {
        case 'clear':
            body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1514454529242-9e4677563e7b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'; // Replace with your clear weather image
            break;
        case 'clouds':
            body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1612297728955-a0ad12a75df9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'; // Replace with your cloudy weather image
            break;
        case 'rain':
            body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'; // Replace with your rainy weather image
            break;
        case 'storm':
            body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1611928482473-7b27d24eab80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'; // Replace with your stormy weather image
            break;
        default:
            body.style.backgroundImage = 'url("default.jpg")'; // Replace with your default background image
    }
    

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
