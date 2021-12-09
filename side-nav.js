
/**Starts the sideNavs functions */
function initSideNav() {
    addEventListeners();
}

let toDos = [];
let isToDoElementOpen = false 

function addEventListeners() {
    document.getElementById('add-todo').addEventListener('click', showToDoElement);
    document.getElementById('scheduleinput').addEventListener('submit', createToDo);
}

function showToDoElement() {
    const toDoElement = document.getElementById('scheduleinput');
    if(!isToDoElementOpen) {
        toDoElement.style.display = 'flex';
        isToDoElementOpen = true
    } else {
        toDoElement.style.display = 'none';
        isToDoElementOpen = false
    }
}

function createToDo(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const toDo = Object.fromEntries(formData);
    toDos.push(toDo);
    console.log(toDos);
     // Till kalendern const filtertedToDos =  toDos.filter((toDo)=> toDo.date === 'yyyy-mm-dd')
    // console.log(filtertedToDos);
    renderToDo();
    // Rendera om kalenderlistan och todo-listan
}

function renderToDo() {
    for(const item of toDos) {
        const parentDiv = document.querySelector('.nav-inner-div2');
        const testElement = document.createElement('div');
        const testElement2 = document.createElement('div');
        const colorElement = document.createElement('div');
        const titleElement = document.createElement('p');
        const descElement = document.createElement('p');
        const timeElement = document.createElement('p');

        testElement.classList.add('schedule-row2', 'flex', 'align-center')
        testElement2.classList.add('flex', 'flex-column', 'justify-center', 'schedule-text-container');
        colorElement.classList.add('schedule-color-block');
        titleElement.innerText = item.title;
        descElement.innerText = item.description;
        timeElement.innerText = item.date;
        testElement.appendChild(colorElement);
        testElement2.appendChild(titleElement);
        testElement2.appendChild(descElement);
        testElement2.appendChild(timeElement);
        testElement.appendChild(testElement2);
        parentDiv.appendChild(testElement);
    }
}
