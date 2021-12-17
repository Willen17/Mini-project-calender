function initcalendar(){

  

    //**Gets the date function */
    const date = new Date();
    
    /**Sets starting index for date to 1 */
    const renderCalendar = () => {
      date.setDate(1);
    
      // days of the current month
      const daysMonthContainer = document.querySelector(".days-container");
    
    
      /** last day in month. for example the 29th, 30th or 31th */
      const lastDayOfMonth = new Date(
        date.getFullYear(),
        // +1 to go to next month, 0 to get ther last day of current month.
        date.getMonth() + 1,
        0
      ).getDate();
    
    
    /**  fetches last days in prev months. Use this to add opacity-filters later */
      const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    
      /**fetches indexnumber of the first day of upcoming month */ 
      const firstDayIndex = date.getDay();
    
      /**fetches indexnumber of the last day of upcoming month */
      const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    
      /** Amount of visible days from upcoming month */
      const nextDays = 7 - lastDayIndex - 1;
    
      // rename fetched months to swedish
      const months = ["Januari",
      "Februari",
      "Mars",
      "April",
      "Maj",
      "Juni",
      "Juli",
      "Augusti",
      "September",
      "Oktober",
      "November",
      "December",
    ];
    
    /**  Add current month to calendar header*/
    document.querySelector(".date h1").innerHTML = months[date.getMonth()];
    /** Add current date, month & year to calender header */
     document.getElementById('today').innerText = dateArray[0] + ' ' + dateArray[1] + ' ' + dateArray[2] + ' ' + dateArray[3]
    
    
    /** Display days 1-31, LOOP */
     let days = "";
    
     /** Adds opacity-filter to visable days from previous month */
      for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
      }
    
    
    /** Colorizes current date, and adds number to all dates. */
      for (let i = 1; i <= lastDayOfMonth; i++) {
    
        if ( //If I is the same as todays date and, the month is the same as current month.
          i === new Date().getDate() &&
          date.getMonth() === new Date().getMonth()
        ) {
          days += `<div class="today">${i}</div>`;
        }
        
        else { //else = dont add backgroundcolor
          days += `<div>${i}</div>`;
        }
    
          const checkYear = date.getFullYear();
          const checkMonth = date.getMonth();
          const currentLoopDate = new Date(checkYear, checkMonth, i);
      
          const toDosForCurrentLoopDay =  toDos.filter((toDo)=> {
            const toDoDate = new Date(toDo.date);
            
            let isPoopTrue = false;
            
            plzWork(currentLoopDate, toDoDate);
    
          function plzWork (currentLoopDate, toDoDate) {
              if(currentLoopDate.toDateString() === toDoDate.toDateString()) {
                console.log('peepee poopoo', 'is so supertrue')
                isPoopTrue = true;
                if(document.querySelectorAll('.div').innerText === i) {
                    
                }
      
                
                days += `<div>${i}<p class="text-in-datebox">${toDoDate + toDo.title + toDo.description}</p></div>`
              }
              }
        
            
    
            
    
            // return areDatesMatching(currentLoopDate, toDoDate); // Googla how to check if two date are same
          }); 
        
      }
    
    
      
    
      // if(toDo = '2021-12-24') {
      //   console.log('it works');
      // }
    
      //if(toDo.date == (date.getFullYear()) + '-' + (date.getMonth + 1) + '-' + i) {
    
      //}
    
    /** Adds opacity-filter to visable days from upcoming month */
      for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        daysMonthContainer.innerHTML = days;
      }
    };
    
    // Arrow click to change month
    
    /**  Change to previous month */
    document.querySelector(".prev").addEventListener("click", () => {
        // currentmonth - 1
      date.setMonth(date.getMonth() - 1);
      renderCalendar();
    });
    
    /** Change to next month */
    document.querySelector(".next").addEventListener("click", () => {
        // currentmonth + 1
      date.setMonth(date.getMonth() + 1);
      renderCalendar();
    });
    
    renderCalendar();
    
    }