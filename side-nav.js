window.addEventListener('load', main);

function main() {
    addEventListeners();
}

let colorRedIsActive = false;
let colorGreenIsActive = false;
let colorBlueIsActive = false;
let calenderInputArray = [];

function addEventListeners() {
    document.getElementById('color-blue').addEventListener('click', colorActiveBlue);
    document.getElementById('color-green').addEventListener('click', colorActiveGreen);
    document.getElementById('color-red').addEventListener('click', colorActiveRed);
    document.getElementById('schedule-button').addEventListener('click', getResultOfInput);
}

function colorActiveRed() {

    if(colorRedIsActive) {
        document.getElementById('color-red').style.border = "0px solid #000000"
        colorRedIsActive = false;
    } else if (!colorRedIsActive) {
        document.getElementById('color-red').style.border = "2px solid #000000"
        colorRedIsActive = true;

        document.getElementById('color-green').style.border = "0px solid #000000"
        colorGreenIsActive = false;
        document.getElementById('color-blue').style.border = "0px solid #000000"
        colorBlueIsActive = false;
    }
}

function colorActiveGreen() {
    if(colorGreenIsActive) {
        document.getElementById('color-green').style.border = "0px solid #000000"
        colorGreenIsActive = false;
    } else if (!colorGreenIsActive) {
        document.getElementById('color-green').style.border = "2px solid #000000"
        colorGreenIsActive = true;

        document.getElementById('color-blue').style.border = "0px solid #000000"
        colorBlueIsActive = false;
        document.getElementById('color-red').style.border = "0px solid #000000"
    }
}

function colorActiveBlue() {
    
    if(colorBlueIsActive) {
        document.getElementById('color-blue').style.border = "0px solid #000000"
        colorBlueIsActive = false;
    } else if (!colorBlueIsActive) {
        document.getElementById('color-blue').style.border = "2px solid #000000"
        colorBlueIsActive = true;

        document.getElementById('color-green').style.border = "0px solid #000000"
        colorGreenIsActive = false;
        document.getElementById('color-red').style.border = "0px solid #000000"
        colorRedIsActive = false;
    }
}

function getResultOfInput() {
    let inputTitle = document.getElementById('input-title').value;
    let inputDesc = document.getElementById('input-description').value;
    let inputDate = document.getElementById('input-date').value;
    let colorValue;

    if (colorRedIsActive) {
        colorValue = 'red';
    }

    if (colorGreenIsActive) {
        colorValue = 'green';
    }

    if (colorBlueIsActive) {
        colorValue = 'blue'
    }

    calenderInputArray.push('Title: ' + inputTitle, 'Desc: ' + inputDesc, 'Date: ' + inputDate, 'Color: ' + colorValue);
    console.log(calenderInputArray);
}
