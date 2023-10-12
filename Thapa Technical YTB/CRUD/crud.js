// Add "Dec" at the end of the array
// Update march to March
// Delete June from the array

// Uncomment line no - 13, 23, 33 for output (One by one)

const month = ["Jan", "march", "April", "June", "July"];
console.log(month);
const addDec = () => {
    month.splice(month.length, 0, "Dec");
    return month;
}
// console.log(addDec()); // Add "Dec" at the end of the array

const updateMarch = () => {
    const marchIndex = month.indexOf("march");
    if (marchIndex != -1) {
        month.splice(marchIndex, 1, "March");
        return month;
    }
    return "No such data found";
}
// console.log(updateMarch()); // Update march to March

const deleteJune = () => {
    const juneIndex = month.indexOf("June");
    if (juneIndex != -1) {
        month.splice(juneIndex, 1);
        return month;
    }
    return "No such data found";
}
// console.log(deleteJune()); // Delete June from the array