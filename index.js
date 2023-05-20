const day= document.getElementById("day");
const dateInputDay= document.getElementById("dayP");
let dayBooleanError=false;
const dayError=document.getElementById("day-error");


const month= document.getElementById("month");
let monthBooleanError=false;
const dateInputMonth=document.getElementById("monthP");
const monthError=document.getElementById("month-error");


const year= document.getElementById("year");
let yearBooleanError=false;
const dateInputYear=document.getElementById("yearP");
const yearError=document.getElementById("year-error");

const handleDayError=() => {
    if(dayBooleanError){
        dayError.style.display="block";
        dateInputDay.style.color = "hsl(0, 100%, 67%)";
        day.style.borderColor="hsl(0, 100%, 67%)"
    }else{
        dayError.style.display="none";
        dateInputDay.style.color = "hsl(0, 1%, 44%)";
        day.style.borderColor="hsl(0, 0%, 86%)"
    }
}
const handleMonthError=() => {
    if(monthBooleanError){
        monthError.style.display="block";
        dateInputMonth.style.color = "hsl(0, 100%, 67%)";
        month.style.borderColor="hsl(0, 100%, 67%)"
    }else{
        monthError.style.display="none";
        dateInputMonth.style.color = "hsl(0, 1%, 44%)";
        month.style.borderColor="hsl(0, 0%, 86%)"
    }
}
const handleYearError=() => {
    if(yearBooleanError){
        yearError.style.display="block";
        dateInputYear.style.color = "hsl(0, 100%, 67%)";
        year.style.borderColor="hsl(0, 100%, 67%)"
    }else{
        yearError.style.display="none";
        dateInputYear.style.color = "hsl(0, 1%, 44%)";
        year.style.borderColor="hsl(0, 0%, 86%)"
    }
}
const fechaActual=new Date;
let dayNow=fechaActual.getDate();
let monthNow=fechaActual.getMonth()+1;
let yearNow=fechaActual.getFullYear();

const dayParam= document.getElementById("days-param");
const monthParam= document.getElementById("months-param");
const yearParam= document.getElementById("years-param");


function validateDate(day,month){
    if((month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12) && day<=31 && day>0){
        return true;
    }
    else if(month==2 && day<=28){
        return true;
    }
    else if ((month==4 || month==6 || month==9 || month==11) && day<=30){
        return true;
    }
    else{
        return false;
    }
}
function daysCalculator(dayVal){
    if (dayVal<=dayNow){
        return dayNow-dayVal
    }
    return dayVal-dayNow
}
function monthsCalculator(monthVal){
    if (monthVal<=monthNow){
        return monthNow-monthVal
    }
    return monthVal-monthNow
}
function ageCalculator(yearVal,monthVal){
    if(monthVal>monthNow){
        return (yearNow-yearVal)-1;
    }
    return (yearNow-yearVal)
}
const handleChange=(dayResult,monthResult,yearResult) => {
    dayParam.innerText=dayResult;
    monthParam.innerText=monthResult;
    yearParam.innerText=yearResult;
    dayParam.style.letterSpacing="1px";
    monthParam.style.letterSpacing="1px";
    yearParam.style.letterSpacing="1px";
    dayParam.classList.add("animation");
    monthParam.classList.add("animation");
    yearParam.classList.add("animation");
}

function handleClick(){
    let dayValue=Math.floor(day.value);
    let monthValue=Math.floor(month.value);
    let yearValue=Math.floor(year.value);
    if(dayValue==""){
        dayBooleanError=true;
        handleDayError();
    }else{
        if(monthValue==""){
            dayBooleanError=false;
            handleDayError();
            monthBooleanError=true;
            handleMonthError();
        }else{
            if (monthValue>12){
                monthBooleanError=true;
                handleMonthError();
            }else{
                if (!validateDate(dayValue,monthValue)){
                    dayBooleanError=true;
                    handleDayError();
                }
                else{
                    if(yearValue>yearNow){
                        dayBooleanError=false;
                        handleDayError();
                        monthBooleanError=false;
                        handleMonthError();
                        yearBooleanError=true;
                        handleYearError();
                    }else{
                        dayBooleanError=false;
                        handleDayError();
                        monthBooleanError=false;
                        handleMonthError();
                        yearBooleanError=false;
                        handleYearError();
                        let dayResult=daysCalculator(dayValue);
                        let monthResult=monthsCalculator(monthValue);
                        let yearResult=ageCalculator(yearValue,monthValue);
                        handleChange(dayResult,monthResult,yearResult);
                        day.value="";
                        month.value="";
                        year.value="";
                    }
                }
            }
            
        }
    }              
}




