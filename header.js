
/**
 * State
 */
let isViewOnMobileDevices = false;

function initheader() {
    addheaderEventListeners();
}

/**
 * Eventlyssnare
 */
function addheaderEventListeners() {
    const todoMobileBtn = document.getElementById('todo-mobile-button');
    todoMobileBtn.addEventListener('click', showTodoListOnMobileDevice);

    const calendarMobileBtn = document.getElementById('calendar-mobile-button');
    calendarMobileBtn.addEventListener('click', showCalendarOnMobileDevice);

    window.addEventListener('resize', resetWindow);
}

/**
 * Visar todo asiden vid mobil vy
 */
function showTodoListOnMobileDevice() {
    if(isViewOnMobileDevices === 'todo') {
        showCalendarOnMobileDevice();
    }

    const asideSection = document.getElementById('aside-section');
    const todoMobileBtn = document.getElementById('todo-mobile-button');

    if(asideSection.style.display === 'flex') {
        asideSection.style.display = 'none';
        todoMobileBtn.style.color = null;
        isViewOnMobileDevices = null;
    } else {
        asideSection.style.display = 'flex';
        todoMobileBtn.style.color = 'black';
        isViewOnMobileDevices = 'calendar';
    }
}

/**
 * Visar kalendern vid mobil vy
 */
function showCalendarOnMobileDevice() {
    if(isViewOnMobileDevices === 'calendar') {
        showTodoListOnMobileDevice();
    }

    const calendarSection = document.getElementById('calendar-section');
    const calendarMobileBtn = document.getElementById('calendar-mobile-button');

    if(calendarSection.style.display === 'unset') {
        calendarSection.style.display = null;
        calendarMobileBtn.style.color = null;
        isViewOnMobileDevices = null;
    } else {
        calendarSection.style.display = 'unset';
        calendarSection.style.width = '100%';
        calendarMobileBtn.style.color = 'black';
        isViewOnMobileDevices = 'todo';
    }
}

/**
 * Återställer styles när skärmen blir större än 768px
 */
function resetWindow() {
    const asideSection = document.getElementById('aside-section');
    const calendarSection = document.getElementById('calendar-section');

    if(window.innerWidth > 768) {
        asideSection.style.display = 'flex';
        calendarSection.style.display = null;
    }
}