// load the data using api
function fetchData(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c8435245d890ced771b6ed25dde33187&units=metric`)
    .then(res => res.json())
    .then(data => displayWeather(data))
}

//temparature is in 'main'
//weather condition is in weather[0]
// display weather data
function displayWeather(data) {
    const cityNameField = document.getElementById('city');
    cityNameField.innerText = data.name;
    const temparatureField = document.getElementById('weather');
    temparatureField.innerText = data.main.temp;
    const conditionField = document.getElementById('condition');
    conditionField.innerText = data.weather[0].main;
}
fetchData('Dhaka')
document.getElementById('search').addEventListener('click', function () {
    const inputField = document.getElementById('input');
    const city = inputField.value;
    fetchData(city);
})