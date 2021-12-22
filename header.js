
/**
 * State
 */
let isViewOnMobileDevices = false;

function initheader() {
    addheaderEventListeners();
    showTodoListOnMobileDevice();

}

/**
 * EventListener
 */
function addheaderEventListeners() {
    const todoMobileBtn = document.getElementById('todo-mobile-button');
    todoMobileBtn.addEventListener('click', showTodoListOnMobileDevice);

    const calendarMobileBtn = document.getElementById('calendar-mobile-button');
    calendarMobileBtn.addEventListener('click', showCalendarOnMobileDevice);

    window.addEventListener('resize', resetWindow);
}

/**
 * Shows todo view on mobile device
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
 * Shows calendar view on mobile device
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

/**
 * Reset styles when window object is larger than 768px
 */
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

