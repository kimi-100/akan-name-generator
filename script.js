// FETCHING FOR USER DATA INPUT ON THE FORM
const dateInput = document.getElementById("dateOfBirth").value;
const gender = document.getElementById("gender").value;

// SETTING UP DATE VARIABLES AS PER THE QUESTION'S FORMULA
const birthDate = new Date(dateInput);
const DD = birthDate.getDate();
const MM = birthDate.getMonth() + 1;
const year = birthDate.getFullYear();
const CC = parseFloat(String(year).slice(0, 2));
const YY = parseFloat(String(year).slice(2, 4));
let d = Math.floor(
    (4*CC - 2 * CC -1) + 
    ((5 * YY)/4) + 
    ((26 * (MM +1))/10) 
    + DD
) % 7;

// AKAN NAMES IN ARRAYS
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];







