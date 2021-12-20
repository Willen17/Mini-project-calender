

function initsidenav() {
    addEventListeners();
}

let toDos = [];
let isToDoElementOpen = false 

function addEventListeners() {
    document.getElementById('add-todo').addEventListener('click', showToDoElement);
    document.getElementById('scheduleinput').addEventListener('submit', createToDo);
}

/**Displays the input-field. If the function is called and the input-field already is displayed, it hides it instead. */
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
    showToDoElement();

    const formData = new FormData(event.target);
 
    const toDo = Object.fromEntries(formData);
    toDos.push(toDo);
    console.log(toDos);
    renderToDos();
    event.target.reset();
    initCalendar2();
   
    // Rendera om kalenderlistan och todo-listan
}

function renderToDos() {
    const parentDiv = document.querySelector('#todos-container');
    parentDiv.innerHTML = '';
    for(const item of toDos) {
        const testElement = document.createElement('div');
        const crossElement = document.createElement('i');
        const testElement2 = document.createElement('div');
        const colorElement = document.createElement('div');
        const titleElement = document.createElement('p');
        const descElement = document.createElement('p');
        const timeElement = document.createElement('p');

        testElement.classList.add('schedule-row2', 'flex', 'align-center', 'relative', [item.title.replaceAll(' ','_')])
        testElement2.classList.add('flex', 'flex-column', 'justify-center', 'schedule-text-container');
        colorElement.classList.add('schedule-color-block');
        crossElement.classList.add('fas', 'fa-times-circle', 'absolute', 'remove-todo'); 
        crossElement.addEventListener('click',() => removeTodo(item))
        titleElement.innerText = item.title;
        descElement.innerText = item.description;
        timeElement.innerText = item.date;
        testElement.appendChild(colorElement);
        testElement.appendChild(crossElement);
        testElement2.appendChild(titleElement);
        testElement2.appendChild(descElement);
        testElement2.appendChild(timeElement);
        testElement.appendChild(testElement2);
        parentDiv.appendChild(testElement);
    }
}

/**
 *
 */
function removeTodo(item) {
    const index = toDos.indexOf(item);
     toDos.splice(index, 1);
     
     renderToDos();
     initCalendar2();
}
