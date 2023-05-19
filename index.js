const day= document.getElementById("day");
const month= document.getElementById("month");
const year= document.getElementById("year");
let dayBoolean=false;
const dayError=document.getElementById("day-error");
const handleDayError=() => {
    if(dayBoolean){
        dayError.style.display="block";
    }
}
const fechaActual=new Date;
let dayNow=fechaActual.getDate();
let monthNow=fechaActual.getMonth()+1;
let yearNow=fechaActual.getFullYear();

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


function handleClick(){
    let dayValue=Math.floor(day.value);
    let monthValue=Math.floor(month.value);
    let yearValue=Math.floor(year.value);
    if(dayValue==""){
        console.log("invalid")
        dayBoolean=true;
        handleDayError();
    }else{
        if(monthValue==""){
            console.log("invalid")
        }else{
            if (monthValue>12){
                console.log("display block para el segundo elemento")
            }else{
                if (!validateDate(dayValue,monthValue)){
                    console.log("display block para el primer elemento")
                }
                else{
                    if(yearValue>yearNow){
                        console.log("display block para el tercer elemento");
                    }else{
                        console.log("validate")
                    }
                }
            }
            
        }
    }              
}




