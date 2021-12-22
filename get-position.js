/**
 * Runs function on window load. Fetched from main.js
 */
function initGetPosition() {
  addGetPositionEventlisteners();
}

/**
 * State for the users' coordinates.
 */
let userCordinates = {latitude:'', longitude:''};

/**
 * EventListener for the accept cookies-popup
 */
function addGetPositionEventlisteners() {
    document.getElementById('location-button').addEventListener('click', getLocation);    
}

/**
 * If user accepts cookies runs a function to get user's position
 */
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("cordinates").innerHTML = "Geolocation is not supported by this browser.";
  }
  document.getElementById('cookie-popup').classList.toggle('cookies-popdown');
}

/**
 * Adds the users' coordinates to the userCordinates object
 * @param {number} position 
 */
function showPosition(position) {
    userCordinates.latitude = position.coords.latitude;
    userCordinates.longitude = position.coords.longitude;
    fetchWeatherInfoForCurrentDay();
}

/**
 * Fetches weather-data based on users' coordinates from api. 
 */
async function fetchWeatherInfoForCurrentDay() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + parseInt(userCordinates.latitude) + '&lon=' + parseInt(userCordinates.longitude) + '&units=metric&exclude=minutely,hourly,daily,alerts&lang=sv&appid=9cad7f8da0da8d85ed29aa07aa5a3591');
    const data = await response.json();
    renderWeather(data);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Converts the weather data to strings, renders the weather data and renders an emoji based on which temperature it is.
 * @param {number} data 
 */
function renderWeather(data) {
  let temperature = data.current.temp;
  let weather = data.current.weather[0].description;
  console.log(temperature + weather);

  if (temperature.toString().includes('-')) {
    temperature = temperature.toString().substring(0, 2);
  } else if (!temperature.toString().includes('-')) { temperature = temperature.toString().substring(0, 1); }

  temperatureElement = document.createElement('p');
  weatherElement = document.createElement('p');
  temperatureElement.innerText = temperature + ' °C';
  weatherElement.innerText = weather;

  weatherElement.classList.add('side-nav-weathertext');
  temperatureElement.classList.add('side-nav-weathertext');

  document.getElementById('currentday-info').appendChild(weatherElement);
  document.getElementById('currentday-info').appendChild(temperatureElement);

  const emojiElement = document.createElement('p');
  emojiElement.classList.add('freezing-img');
  document.querySelector('.freezing-img-container').appendChild(emojiElement);

  if (window.innerWidth >= 1365) {
    document.querySelector('.nav-inner-div1').classList.toggle('justify-between');
  }
  if (!window.innerWidth >= 1365) {
    document.querySelector('.nav-inner-div1').classList.toggle('justify-between');
    emojiElement.style.marginLeft = 0 + 'rem'
  }



  if (temperature < 0) {
    emojiElement.innerText = '🥶';
    emojiElement.style.fontSize = 6 + 'rem';
  }
  if (temperature < 5 && temperature > 0) {
    emojiElement.innerText = '😬';
    emojiElement.style.fontSize = 6 + 'rem';
  }
  if (temperature < 10 && temperature > 5) {
    emojiElement.innerText = '😐';
    emojiElement.style.fontSize = 6 + 'rem';
  }
  if (temperature < 15 && temperature > 10) {
    emojiElement.innerText = '🙂';
    emojiElement.style.fontSize = 6 + 'rem';
  }
  if (temperature < 20 && temperature > 15) {
    emojiElement.innerText = '😍';
    emojiElement.style.fontSize = 6 + 'rem';
  }
  if (temperature > 20) {
    emojiElement.innerText = '🥵';
    emojiElement.style.fontSize = 6 + 'rem';
  }

}