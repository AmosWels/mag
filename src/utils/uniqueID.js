import React from "react";

export const currentDate = () => {
    const dateNow = new Date(); // Creating a new date object with the current date and time
    const year = dateNow.getFullYear(); // Getting current year from the created Date object
    const monthWithOffset = dateNow.getUTCMonth() + 1; // January is 0 by default in JS. Offsetting +1 to fix date for calendar.
    const month = // Setting current Month number from current Date object
    monthWithOffset.toString().length < 2 // Checking if month is < 10 and pre-prending 0 if not to adjust for date input.
        ? `0${monthWithOffset}`
        : monthWithOffset;
    const date =
    dateNow.getUTCDate().toString().length < 2 // Checking if date is < 10 and pre-prending 0 if not to adjust for date input.
        ? `0${dateNow.getUTCDate()}`
        : dateNow.getUTCDate();

    const materialDateInput = `${year}-${month}-${date}`; // combining to format for defaultValue or value attribute of material <TextField>
    return materialDateInput;
}
export default currentDate;

export const uniqueStudentID = () => {
    return 'PPF-' + (Math.random()*Date.now()).toString(36).substr(2, 6).toUpperCase();

}