window.addEventListener('load', main);

function main(){
    //addEventListeners();
  }


function showbox() {
    document.getElementById('date-box-container').style.display = "flex";
    document.getElementById("title").innerHTML = "Test 1 titel";
    document.getElementById("description").innerHTML = "Idag ska jag snusa lös";
}

function hidebox(){
    document.getElementById('date-box-container').style.display = "none"; 
}

