
function initGetPosition() {
    addGetPositionEventlisteners();
    fetchWeatherInfoForCurrentDay()
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
}

async function fetchWeatherInfoForCurrentDay() {
  try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + userCordinates.latitude +'&lon=' + userCordinates.longitude + '&units=metric&exclude=minutely,hourly,daily,alerts&appid=9cad7f8da0da8d85ed29aa07aa5a3591')
      const data = await response.json();
      console.log(data);
      // renderAllHolidays(data);
  } catch (error) {
      console.error(error);
  }
}