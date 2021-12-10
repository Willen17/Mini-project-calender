function initcalendar(){

    const calendar = document.querySelector("#app-calendar");
    const numberboxes = document.querySelector("#numberboxes");
    
    
    const isWeekend = day => {
        // 6 när det är lördag, 0 när det är söndag
    return day % 7 == 0;
    }
    
    
    
    
    // 1. första dagen i månaden
    // 2. hur många dagar är det i månaden
    for (let day = 1; day < 31; day ++) {
    
    //
    const getDayName = day => {
        const date = new Date(Date.UTC(2018, 0, day));
    
       return new Intl.DateTimeFormat("en-US", {weekday:
         "short" })
        .format(date);
    }
    
      
        
        const weekend = isWeekend(day);
    
       
    
        // let cell2 = "";
        // if (day < 7) {
             const dayName = getDayName(day);
        // }
    
    
    
    const cell = document.createElement("div");
    
    cell.className = `day ${weekend ? "weekend" : ""}`;
    cell.innerHTML= day; cell;
    calendar.append(cell);
    
    
    
    const cell2 = document.createElement("div");
    cell2.innerHTML= dayName;
    cell.appendChild(cell2);
    
    console.log(dayName, day)
    
    
    }
    
    
    document.querySelectorAll("#app-calendar .day").forEach
    (day => {
     day.addEventListener("click", event => {
         event.currentTarget.classList.toggle("selected");
     });
    });
    
    
    
    }
    
    
    
    // var date = new Date();
    // var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    // var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);