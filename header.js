

/**
 * State
 */
let isViewOnMobileDevices = false;

/**
 * When document has loaded main function will run
 * and in turn call other functions.
 */
function initheader() {
    addheaderEventListeners();
    showTodoListOnMobileDevice();

}

/**
 * addEventListeners
 */
function addheaderEventListeners() {
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
    
    const hideTodoButton = document.getElementById('todo-mobile-not-a-button');
    const hideCalendarButton = document.getElementById('calendar-mobile-not-a-button');
    const calendarMobileBtn = document.getElementById('calendar-mobile-button');

    if(asideSection.style.display === 'flex') {
        asideSection.style.display = 'none';

        isViewOnMobileDevices = null;
        
    } else {
        asideSection.style.display = 'flex';
        isViewOnMobileDevices = 'calendar';
        todoMobileBtn.style.display = 'none';
        hideTodoButton.style.display='unset'
        calendarMobileBtn.style.display = 'unset';
        hideCalendarButton.style.display='none'
    }
}

/**
 * shows the calendar section on mobile devices
 */
function showCalendarOnMobileDevice() {
    if(isViewOnMobileDevices === 'calendar' || isViewOnMobileDevices === false) {
        showTodoListOnMobileDevice();
    }
    
    const calendarSection = document.getElementById('calendar-section');
    const calendarMobileBtn = document.getElementById('calendar-mobile-button');

    const hideCalendarButton = document.getElementById('calendar-mobile-not-a-button');
    const todoMobileBtn = document.getElementById('todo-mobile-button');
    const hideTodoButton = document.getElementById('todo-mobile-not-a-button');

    
    if(calendarSection.style.display === 'unset') {
        calendarSection.style.display = null;
        calendarMobileBtn.style.color = null;
        isViewOnMobileDevices = null;
    } else {
        calendarSection.style.display = 'unset';
        calendarSection.style.width = '100%';
        calendarMobileBtn.style.color = 'black';
        isViewOnMobileDevices = 'todo';
        calendarMobileBtn.style.display = 'none';
        hideCalendarButton.style.display='unset'
        todoMobileBtn.style.display = 'unset'
        hideTodoButton.style.display='none'
    }
}

function resetWindow() {
    const asideSection = document.getElementById('aside-section');
    const calendarSection = document.getElementById('calendar-section');
    
    const todoMobileBtn = document.getElementById('todo-mobile-button');
    const hideTodoButton = document.getElementById('todo-mobile-not-a-button');
    const calendarMobileBtn = document.getElementById('calendar-mobile-button');
    const hideCalendarButton = document.getElementById('calendar-mobile-not-a-button');


    if(window.innerWidth > 768) {
        asideSection.style.display = 'flex';
        calendarSection.style.display = null;
        isViewOnMobileDevices = false;



        todoMobileBtn.style.display = 'none';
        hideTodoButton.style.display='unset'
        calendarMobileBtn.style.display = 'unset';
        hideCalendarButton.style.display='none'
    }
}

