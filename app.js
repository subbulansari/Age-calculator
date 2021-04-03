let days = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");

let showage = document.getElementById("show-age");

const btn = document.getElementById("Calc-btn");

var today = newDate();

let d = today.getDate();
let m = today.getMonth() + 1;
let y = today.getyear(); 

let maxDays= 0;
let monthNum = 1;
btn.addEventListener("click",(days,month,year) =>{
    days = days.value;
    month = month.value;
    year = year.value;

    if(days.value ==""|| month.value ==""|| year.value ==""){
        return alert("Enter your date of birth");
    }
        console.log (`current date:${d}${m}${y}`);

        if(m == 1){//jan
            maxDays = 31;
            monthNum =1; 
        }
    else if(m == 2){//feb
        maxDays = 28;
        monthNum =2;
    }
    else if(m == 3){//mar
        maxDays = 31;
        monthNum =3;
    }
    else if(m == 4){//apr
        maxDays = 30;
        monthNum =4;
    }
    else if(m == 5){//may
        maxDays = 31;
        monthNum =5;
    }
    else if(m == 6){//jun
        maxDays = 31;
        monthNum =6;
    }
    else if(m == 7){//jul
        maxDays = 31;
        monthNum =7;
    }
    else if(m == 8){//Aug
        maxDays = 31;
        monthNum =8;
    }
    else if(m == 9){//sep
        maxDays = 31;
        monthNum =9;
    }
    else if(m == 10){//oct
        maxDays = 31;
        monthNum =10;
    }
    else if(m == 11){//nov
        maxDays = 31;
        monthNum =11;
    }
    else if(m == 12){//dec
        maxDays = 31;
        monthNum =12;
    }
    
    var ageYears = y - year;
    if(m <= month){
        m = m + 12;
    }

    var ageMonths = m - month;
    
    var ageDays = (maxDays-d) + parseInt(days);
    console.Log(`your age is ${ageYear}y,${ageMonth}m and ${ageDays}d`);
     showAge.innerHTML =` your age is ${ageYear}y,${agemonth}m and ${ageDays}d`;
})




