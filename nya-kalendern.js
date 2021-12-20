/** Kör alla funktioner i denna script onload */
function initCalendar2() {
    addDaysToGrid();
    displayCurrentMonth();


}


/** Hämtar datum från server. Filtrerat År, månad, datum och veckodag. */
const dateObject = new Date();
const year = dateObject.getFullYear();
let month = dateObject.getMonth();
const dayNumber = dateObject.getDate();
const dayName = dateObject.getDay();

/** Hämtar ut hur många dagar som finns i varje månad */
// 1, 0 = days
// 1 = Från början är januari=0, med +1 blir januari indexnummer 1.
// 0 = Första dagen i nästa månad är 1, tar man då 0 får man sista dagen i nuvarande månad.
const daysOfMonths = new Date(year, month + 1, 0).getDate();

/** Hämtar ut indexnumret (veckodag) av första dagen i nuvarande månaden */
// 1 = Hämtar ut första datumet i månaden för att kunna placera ut på rätt veckodag.
// T.ex. 1 december är på en "onsdag".
const indexOfFirstDayOfCurrentMonth = new Date(year, month, 1, dayName).getDay();

/** Hämtar ut indexnumret (veckodag) av sista dagen i nuvarande månaden */
// 1 = Hämtar ut sista datumet i månaden för att kunna placera ut på rätt veckodag.
// T.ex. 31 oktober är på en "söndag".
const indexOfLastDayOfCurrentMonth = new Date(year, month + 1, 0, dayName).getDay();


/** Hämtar ut sista dagen i förgående månad */
const lastDaysOfPreviousMonth = new Date(year, month, 0).getDate();

/**Får ut indexplatsen (Veckodagen) som den sista dagen i föregående månad har, Måndag = 1*/
const IndexOflastDaysOfPreviousMonth = new Date(year, month, 0).getDay();


/** Hämtar ut första dagen i nästkommande månad */
const firstDayOfNextMonth = new Date(year, month + 1, 1).getDate();

/**Får ut indexplatsen (Veckodagen) som den första dagen i nästkommande månad har, Måndag = 1*/
const IndexOfFirstDaysOfNextMonth = new Date(year, month + 1, 1).getDay();


/** Översätter månaderna från siffror till Svenska */
const monthNameSwedish = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]
/** Översätter veckodagarna från siffror till Svenska */
const dayNameSwedish = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

const amountOfDaysToDisplayFromNextMonth = 7 - IndexOfFirstDaysOfNextMonth + 1;

/** Visar pågående månads namn i headern */
function displayCurrentMonth() {
    document.querySelector(".date h1").innerHTML = monthNameSwedish[month];
    /** Visar pågående år i headern */
    document.getElementById('today').innerText = dateArray[3]
}




/** Lägg till divar med datum i kalendercontainern */
function addDaysToGrid() {
    // Hämtar ut div elementet från Html
    const calendarContent = document.querySelector('.days-container');
    calendarContent.innerHTML = '';

    /**Renderar sista dagarna av förra månaden  */
    for (let previousDays = IndexOflastDaysOfPreviousMonth; previousDays > 0; previousDays--) {
        let dayBoxes = document.createElement('div');
        dayBoxes.className = "days";
        dayBoxes.style.opacity = '50%';

        let displayDate = document.createElement('p');
        dayBoxes.append(displayDate);
        displayDate.innerText = `${lastDaysOfPreviousMonth - previousDays + 1}`;

        calendarContent.appendChild(dayBoxes);

    }




    // Lägger till divar ut efter antalet dagar i vald månad inuti calendar-content-diven & ger dem innehåll, id & class
    for (let days = 1; days <= daysOfMonths; days++) {
        let dayBoxes = document.createElement('div');
        dayBoxes.className = "days";


        let displayDate = document.createElement('p');
        dayBoxes.append(displayDate);
        displayDate.innerText = `${days}`;


        calendarContent.appendChild(dayBoxes);

        if ( //If days är samma som dagens datum, lägg till bakgrundsfärg för att identifiera dagens datum.
            days === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            dayBoxes.classList.add('today');
            dayBoxes.classList.remove('days')
        }

        const checkYear = dateObject.getFullYear();
        const checkMonth = dateObject.getMonth();
        const currentLoopDate = new Date(checkYear, checkMonth, days); //datumet för det datum vi loopar just nu

        const toDosForCurrentLoopDay = toDos.filter((toDo) => { //tar alla våra todos och filtrerar, kollar om varje todos matchar med currentloopdate
            const toDoDate = new Date(toDo.date);
            return areDatesMatching(currentLoopDate, toDoDate); // Googla how to check if two date are same
        });

        if (toDosForCurrentLoopDay.length > 0) {
            const textInsideDateBox = document.createElement('p')
            textInsideDateBox.className = 'notification';
            textInsideDateBox.innerText = toDosForCurrentLoopDay.length;
            dayBoxes.append(textInsideDateBox);
        }

        calendarContent.append(dayBoxes);
    }

    // If (sista datum i månaden är en lördag (6) = Lägg endast ut FÖRSTA DAGEN I NÄSTA MÅNAD-div istället för ++)

    const testnumbers = 7 - ((IndexOflastDaysOfPreviousMonth + daysOfMonths) % 7);
    console.log(testnumbers)
    /**Renderar första dagarna av nästkommande månad */
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

function areDatesMatching(date1, date2) { // kollar om datumen matchar
    return  date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
  }