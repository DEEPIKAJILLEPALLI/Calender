var month, dayDate, year, leap = false;
var days, errorMsg = "";
var TodayDate = new Date();
dayDate = TodayDate.getDay();
year = TodayDate.getFullYear();
month = 1 + TodayDate.getMonth();
var pattern = /[a-zA-Z]/g;
document.getElementById("day").value = dayDate;
document.getElementById("month").value = month;
document.getElementById("year").value = year;

function SelectedMonth() {
    month = document.getElementById("month").value;
    document.getElementById("Errormsg").innerText = "";
    var result = month.match(pattern);
    if (result == null) {
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 || month == 01 || month == 03 || month == 05 || month == 07 || month == 08 || month == 010 || month == 012) {
            days = 31;
        } else if (month == 2 || month == 02) {
            if (leap) {
                days = 29;
            } else {
                days = 28;
            }
        } else if (month == 4 || month == 04 || month == 6 || month == 06 || month == 9 || month == 09 || month == 11 || month == 011) {
            days = 30;
        }
        ErrorMsgs();
    } else {
        document.getElementById("Errormsg").innerText = "please enter only digits!!"
    }


}

function SelectedDay() {
    dayDate = document.getElementById("day").value;
    document.getElementById("Errormsg").innerText = "";
    var result = dayDate.match(pattern);
    if (result == null) {
        SelectedYear();
        SelectedMonth();
    } else {
        document.getElementById("Errormsg").innerText = "please enter only digits!!"
    }
    ErrorMsgs();

}

function SelectedYear() {
    year = document.getElementById("year").value;
    document.getElementById("Errormsg").innerText = "";
    var result = year.match(pattern);
    if (result == null) {
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                // year is divisible by 400, hence the year is a leap year
                if (year % 400 == 0)
                    leap = true;
                else
                    leap = false;
            } else
                leap = true;
        } else {
            leap = false;
        }
        ErrorMsgs();
    } else {
        document.getElementById("Errormsg").innerText = "please enter only digits!!"
    }

}

function ErrorMsgs() {
    if (dayDate == "") {
        errorMsg = "Enter Date";
        document.getElementById("Errormsg").innerText = errorMsg;
    }
    if (month == "") {
        errorMsg = "Enter month";
        document.getElementById("Errormsg").innerText = errorMsg;
    }
    if (year == "") {
        errorMsg = "Enter year";
        document.getElementById("Errormsg").innerText = errorMsg;
    }
    if (month == "" && year == "") {
        errorMsg = "Enter month && year";
        document.getElementById("Errormsg").innerText = errorMsg;
    }
    if (month == "" && dayDate == "") {
        errorMsg = "Enter month && Date";
        document.getElementById("Errormsg").innerText = errorMsg;
    }
    if (year == "" && dayDate == "") {
        errorMsg = "Enter Date && year";
        document.getElementById("Errormsg").innerText = errorMsg;
    }
    if (year == "" && month == "") {
        errorMsg = "Enter Date && month";
        document.getElementById("Errormsg").innerText = errorMsg;
    }
    if (month == "" && year == "" && dayDate == "") {
        errorMsg = "Enter Date,month && year";
        document.getElementById("Errormsg").innerText = errorMsg;
    }
    if (dayDate !== "" && (dayDate > days || dayDate < 1)) {
        errorMsg = "dayDate should be less than" + days;
        document.getElementById("Errormsg").innerText = errorMsg;
    }
    if (month !== "" && (month > 12 || month < 1)) {
        errorMsg = "Month should be between 1 and 12"
        document.getElementById("Errormsg").innerText = errorMsg;
    }
    if (dayDate < 1 && month < 1 || dayDate > 31 && month > 12) {
        errorMsg = "Month should be between 1 and 12 && dayDate should be greater than 1 and lessthan 31 based on ur month"
        document.getElementById("Errormsg").innerText = errorMsg;
    }
}