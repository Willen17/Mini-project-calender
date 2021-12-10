

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
     // Till kalendern const filtertedToDos =  toDos.filter((toDo)=> toDo.date === 'yyyy-mm-dd')
    // console.log(filtertedToDos);
    renderToDo();
    // Rendera om kalenderlistan och todo-listan
}

function renderToDo() {

    for(const item of toDos) {
        if(item.isToDoDisplayed == undefined) {
        const parentDiv = document.querySelector('.nav-inner-div2');
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
        crossElement.classList.add('fas', 'fa-times-circle', 'absolute', 'remove-todo', 'button' + item.date +'exit') //This has to be changed to item.title, since todos can have the same date.
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
        item.isToDoDisplayed = true;

        document.querySelector(['.button' + item.date +'exit']).addEventListener('click', removeParentElement);
    } 
    }
}

/**Scales down the class name of the element to match the date-format in the array. 
 * Also removes the parent element and everything it contains.
 */
function removeParentElement(event) {
        let className = event.target.classList[4].replaceAll('button', '',);
        className = className.replaceAll('exit', '');
        removeInArray(className);


     event.currentTarget.parentNode.remove();
}

/**If the name of the class on cross-button element matches a date in the array, that object containing that date 
 * gets a new parameter called active.
  */
function removeInArray(className) {
    for(let i = 0; i < toDos.length; i++) {
        if(toDos[i].date == className)
        toDos[i].active = false;
    }
}
