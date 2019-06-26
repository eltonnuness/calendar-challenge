function instanceYear(yearNumber){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "December"];
    const maxDaysEachMonth = [31, calculateLeapYear(yearNumber), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const monthsObj = [];
    for (let m = 0; m < 12; m++){
        monthsObj.push(month(months[m], maxDaysEachMonth[m]));
    }
    return monthsObj;
}

function days(numberOfDays){
    let days = [];
    for (let d = 1; d <= numberOfDays; d++){
        days.push(d);
    }
    return days;
}

function month(name, numberOfDays){
    const d = days(numberOfDays);
    return {
        "month": name,
        "days": d
    }
}

function calculateLeapYear(year){
    //TODO Implement...
    return 28;
}

module.exports = {instanceYear};