/** Runs functions onload. Fetched from main.js */
function initCalendar() {
    addDaysToGrid();
    displayCurrentMonth();


}


/** Fetches dates from server. Filtered by year, month, date and weekday */
const dateObject = new Date();
const year = dateObject.getFullYear();
let month = dateObject.getMonth();
const dayNumber = dateObject.getDate();
const dayName = dateObject.getDay();

/** Fetches how many days there is in each month */
// 1, 0 = days
// 1 = Changes indexnumber of the month. 1-12 instead of 0-11. Januari = 0 to Januari = 1 
const daysOfMonths = new Date(year, month + 1, 0).getDate();

/** Fetches the indexnumber (weekday) of the first day in current month */
// 1 = Fetches the first date of the month to be able to place it on the correct day of the week
// Example: 1st of December is a Wednesday
const indexOfFirstDayOfCurrentMonth = new Date(year, month, 1, dayName).getDay();

/** Fetches the indexdate (weekday) of the last day in current month */
// 1 = Fetches the last date of the month to be able to place it on the correct day of the week
// Example: 31st of October is a Sunday
const indexOfLastDayOfCurrentMonth = new Date(year, month + 1, 0, dayName).getDay();


/** Fetches the last day of previous month */
const lastDaysOfPreviousMonth = new Date(year, month, 0).getDate();

/** Fetches the indexnumber (weekday) of the last day of previous month*/
// Monday = 1
const IndexOflastDaysOfPreviousMonth = new Date(year, month, 0).getDay();


/** Fetches the first day of upcoming month*/
const firstDayOfNextMonth = new Date(year, month + 1, 1).getDate();


/** Fetches the indexnumber (weekday) of the first day in upcoming month */
const IndexOfFirstDaysOfNextMonth = new Date(year, month + 1, 1).getDay();


/** Translates months from numbers to Swedish month-names */
const monthNameSwedish = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]
/** Translates weekdays from numbers to Swedish weekday-names */
const dayNameSwedish = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

const amountOfDaysToDisplayFromNextMonth = 7 - IndexOfFirstDaysOfNextMonth + 1;

/** Displays current month in header */
function displayCurrentMonth() {
    document.querySelector(".date h1").innerHTML = monthNameSwedish[month];
    /** Visar pågående år i headern */
    document.getElementById('today').innerText = dateArray[3]
}




/** Adds divs with dates in calendar */
function addDaysToGrid() {
    // Fetches the div element from Html
    const calendarContent = document.querySelector('.days-container');
    calendarContent.innerHTML = '';

    /** Renders the last days of previous month */
    for (let previousDays = IndexOflastDaysOfPreviousMonth; previousDays > 0; previousDays--) {
        let dayBoxes = document.createElement('div');
        dayBoxes.className = "days";
        dayBoxes.style.opacity = '50%';

        let displayDate = document.createElement('p');
        dayBoxes.append(displayDate);
        displayDate.innerText = `${lastDaysOfPreviousMonth - previousDays + 1}`;

        calendarContent.appendChild(dayBoxes);

    }






    /** Adds amount of divs by how many days of displayed month, inside of calendar-content-div */
    // Also adds content & classes to the divs
    for (let days = 1; days <= daysOfMonths; days++) {
        let dayBoxes = document.createElement('div');
        dayBoxes.className = "days";


        let displayDate = document.createElement('p');
        dayBoxes.append(displayDate);
        displayDate.innerText = `${days}`;


        calendarContent.appendChild(dayBoxes);

        if ( // If days is todays date, add backgroundcolor to identify current day
            days === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            dayBoxes.classList.add('today');
            dayBoxes.classList.remove('days')
        }

        const checkYear = dateObject.getFullYear();
        const checkMonth = dateObject.getMonth();
        const currentLoopDate = new Date(checkYear, checkMonth, days); // Creates date object for the day thats currently looping

        const toDosForCurrentLoopDay = toDos.filter((toDo) => { // Filters all of our todos and checks if they match with currentloopdaydate
            const toDoDate = new Date(toDo.date);
            return areDatesMatching(currentLoopDate, toDoDate); 
        });

        if (toDosForCurrentLoopDay.length > 0) {
            const textInsideDateBox = document.createElement('p')
            textInsideDateBox.className = 'notification';
            textInsideDateBox.innerText = toDosForCurrentLoopDay.length;
            dayBoxes.append(textInsideDateBox);
        }

        calendarContent.append(dayBoxes);
    }

    
    // If (last date of month is a saturday(6) = Only add 1 day from upcoming month instead of ++.)

    const testnumbers = 7 - ((IndexOflastDaysOfPreviousMonth + daysOfMonths) % 7);
    console.log(testnumbers)
    /** Renders the first days of upcoming month */
    for (let nextDays = 1; nextDays <= testnumbers; nextDays++) {


        let dayBoxes = document.createElement('div');
        dayBoxes.className = "days";
        dayBoxes.style.opacity = '50%';

        let displayDate = document.createElement('p');
        dayBoxes.append(displayDate);
        displayDate.innerText = `${nextDays}`;

        calendarContent.appendChild(dayBoxes);
    }

}


function displayPrevMonth() {
    month = month - 1;


    if (month < 0) {
        month = 11;
    }
    document.querySelector(".date h1").innerHTML = monthNameSwedish[month];
}

function displayNextMonth() {
    month = month + 1;

    if (month > 11) {
        month = 0;
    }
    document.querySelector(".date h1").innerHTML = monthNameSwedish[month];

}

function areDatesMatching(date1, date2) { // Checks if the dates are matching
    return  date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
  }