const apiKey = '38712969ee28acc4687eb10e9a52dce7';

document.getElementById('search-btn').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    if (location) {
        getWeatherData(location);
    }
});

function getWeatherData(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            alert("Unable to fetch weather data. Please check the city name and try again.");
        });
}

function displayWeatherData(data) {
    document.getElementById('weather-result').style.display = 'block';
    document.getElementById('city-name').textContent = `Weather in ${data.name}`;
    document.getElementById('weather-description').textContent = `Description: ${data.weather[0].description}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
}
