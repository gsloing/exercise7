
function weekdayText(weekdays) {
    return function getText(number) {
        if (number >= weekdays.length || number < 0) {
            throw new Error('Invalid day number');
        } 
        return weekdays[number];
    }
}

const day = weekdayText(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])("6");
console.log(day); // Saturday