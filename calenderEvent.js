var select = document.querySelectorAll("select");
var list = document.querySelector('ul');
var displaydate = document.querySelector('h1');
var year = document.getElementById('years');
var choice = document.getElementById("months");
var days, listItem, leap = false;

function UpdateDate(value) {
displaydate.innerHTML= value.textContent +" "+ choice.value + " "+ year.value ;
}

function SelectedMonth() {
    days = 31;
    if (choice.value === 'February' && !leap) {
        days = 28;
    } else if (choice.value === 'February' && leap) {
        days = 29;
    } else if (choice.value === 'April' || choice.value === 'June' || choice.value === 'September' || choice.value === 'November') {
        days = 30;
    }
    createCalendar(days, choice.value);
}

function SelectedYear() {
    if (year.value % 4 == 0) {
        if (year.value % 100 == 0) {
            // year is divisible by 400, hence the year is a leap year
            if (year.value % 400 == 0)
                leap = true;
            else
                leap = false;
        } else
            leap = true;
    } else
        leap = false;
    SelectedMonth();
}

function createYear() {
    select = document.querySelectorAll('select');
    for (var i = 1990; i <= 2030; i++) {
        var optionValue = document.createElement('option');
        df = document.createDocumentFragment();
        optionValue.value = i;
        optionValue.appendChild(document.createTextNode(i));
        df.appendChild(optionValue);
        year.appendChild(df);
    }
    SlectedMonth();
}

function createCalendar(days, choice) {
    list.innerHTML = '';
    for (var i = 1; i <= days; i++) {
        listItem = document.createElement('li');
        listItem.onmouseover=function(){
            UpdateDate(this);
        };
        listItem.width = '25px;'
        listItem.height = '25px;'
        listItem.textContent = i;
        listItem.backgroundColor = 'purple';
        list.appendChild(listItem);
    }
}

createCalendar('31', 'January');