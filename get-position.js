
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
}