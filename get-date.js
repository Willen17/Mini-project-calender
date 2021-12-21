

function initgetdate() {
  // addEventListeners();
  getTodaysDate();
  renderTodaysDate();
  updateClock();
  initClock();
  renderSeason();
}

const date = new Date();
let dateArray = [];

function getTodaysDate() {

  dateArray.push(getDay(), date.getDate(), getMonth(), date.getFullYear());

  console.log(dateArray);
}

function renderTodaysDate() {
  const currentDayElement = document.getElementById('side-nav-current-day');
  const currentDateElement = document.getElementById('side-nav-current-date');

  currentDayElement.innerText = dateArray[0];
  currentDateElement.innerText = dateArray[1] + ' ' + dateArray[2] + ' ' + dateArray[3];
}

function updateClock() {
  const now = new Date();
  hours = now.getHours().toString().padStart(2, '0'),
  minutes = now.getMinutes().toString().padStart(2, '0'),
  seconds = now.getSeconds().toString().padStart(2, '0');
  const timeElement = document.getElementById('current-time');
  timeElement.innerText = hours + ':' + minutes +  ':' + seconds;
}

function initClock() {
  window.setInterval('updateClock()', 1);
}

function getDay() {
  let day;
  switch (date.getDay()) {
    case 0:
      day = "Söndag";
      break;
    case 1:
      day = "Måndag";
      break;
    case 2:
      day = "Tisdag";
      break;
    case 3:
      day = "Onsdag";
      break;
    case 4:
      day = "Torsdag";
      break;
    case 5:
      day = "Fredag";
      break;
    case 6:
      day = "Lördag";
  }
  return day;
}

function getMonth() {
  let month;
  switch (date.getMonth()) {
    case 0:
      month = "Januari";
      break;
    case 1:
      month = "Februari";
      break;
    case 2:
      month = "Mars";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "Maj";
      break;
    case 5:
      month = "Juni";
      break;
    case 6:
      month = "Juli";
      break;
    case 7:
      month = "Augusti";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "Oktober";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }
  return month;
}

function renderSeason() {
  const seasonElement = document.querySelector('.side-nav-shorttext');

  if(date.getMonth() == 11 || date.getMonth() == 0 || date.getMonth() == 1) {
    seasonElement.innerHTML = 'Vinter'
  }
  if(date.getMonth() == 2 || date.getMonth() == 3 || date.getMonth() == 4) {
    seasonElement.innerHTML = 'Vår'
  }
  if(date.getMonth() == 5 || date.getMonth() == 6 || date.getMonth() == 7) {
    seasonElement.innerHTML = 'Sommar'
  }
  if(date.getMonth() == 8 || date.getMonth() == 9 || date.getMonth() == 10) {
    seasonElement.innerHTML = 'Höst'
  }

}
