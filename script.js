function searchWeather() {
    const apiKey = '15d62855a8cde5311ed5b82e995e2fd3'; 
    const searchInput = document.getElementById('searchInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}`;
   
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}