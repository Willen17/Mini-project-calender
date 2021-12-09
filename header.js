
/**
 * State
 */
let isViewOnMobileDevices = false;

/**
 * When document has loaded main function will run
 * and in turn call other functions.
 */
function initHeader() {
    addEventListeners();
}

/**
 * addEventListeners
 */
function addEventListeners() {
    const todoMobileBtn = document.getElementById('todo-mobile-button');
    todoMobileBtn.addEventListener('click', showTodoListOnMobileDevice);

    const calendarMobileBtn = document.getElementById('calendar-mobile-button');
    calendarMobileBtn.addEventListener('click', showCalendarOnMobileDevice);

    window.addEventListener('resize', resetWindow);
}

/**
 * Shows the todo section on mobile devices
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
 * shows the calendar section on mobile devices
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

function resetWindow() {
    const asideSection = document.getElementById('aside-section');
    const calendarSection = document.getElementById('calendar-section');

    if(window.innerWidth > 768) {
        asideSection.style.display = 'flex';
        calendarSection.style.display = null;
    }
}