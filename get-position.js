
function initGetPosition() {
    addGetPositionEventlisteners();
}
let userCordinates = {latitude:'', longitude:''};

function addGetPositionEventlisteners() {
    document.getElementById('location-button').addEventListener('click', getLocation);    }

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    document.getElementById("cordinates").innerHTML = "Geolocation is not supported by this browser.";
  }
  document.getElementById('cookie-popup').classList.toggle('cookies-popdown');
}

function showPosition(position) {
    userCordinates.latitude = position.coords.latitude;
    userCordinates.longitude = position.coords.longitude;
    fetchWeatherInfoForCurrentDay()
}

async function fetchWeatherInfoForCurrentDay() {
  try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+ parseInt(userCordinates.latitude) +'&lon=' + parseInt(userCordinates.longitude) + '&units=metric&exclude=minutely,hourly,daily,alerts&lang=sv&appid=9cad7f8da0da8d85ed29aa07aa5a3591');
      const data = await response.json();
      console.log(data);
      renderWeather(data);
      // renderAllHolidays(data);
  } catch (error) {
      console.error(error);
  }
}

function renderWeather(data) {
  let temperature = data.current.temp;
  let weather = data.current.weather[0].description;
  console.log(temperature + weather);

  if(temperature.toString().includes('-')) {
    temperature = temperature.toString().substring(0, 2);
  } else if (!temperature.toString().includes('-')) {temperature = temperature.toString().substring(0, 1);}

  temperatureElement = document.createElement('p');
  weatherElement = document.createElement('p');
  temperatureElement.innerText = temperature + ' °C';
  weatherElement.innerText = weather;

  weatherElement.classList.add('side-nav-weathertext');
  temperatureElement.classList.add('side-nav-weathertext');

  document.getElementById('currentday-info').appendChild(weatherElement);
  document.getElementById('currentday-info').appendChild(temperatureElement);

}