let yes = "YES, it is a leapyear";
let no = "NOT a leapyear";
let year = prompt("Enter a year");
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(yes);
        } else
                alert(no);
    } else
            alert(yes);
} else
        alert(no);