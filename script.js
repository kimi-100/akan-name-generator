// FETCHING FOR USER DATA INPUT ON THE FORM
const akanNameDisplay = document.getElementById("akanNameDisplay");
const akanMeaningDisplay = document.getElementById("akanMeaningDisplay")
const form = document.getElementById("akanForm");

// THE BUTTON AND EVENT LISTENERS
form.addEventListener("submit", function (event) {
    event.preventDefault()

    //GETTING VALUES FROM THE FORM THE USER HAD TO FILL IN
    const dateInput = document.getElementById("dateOfBirth").value;
    const gender = document.getElementById("gender").value;

    // SETTING UP DATE VARIABLES AS PER THE QUESTION'S FORMULA
    let akanName = ""
    let akanMeaning = ""
    const birthDate = new Date(dateInput);
    let DD = birthDate.getDate();
    let MM = birthDate.getMonth() + 1;
    let year = birthDate.getFullYear();
    // ENSURES THAT IT RESETS MONTH COUNT AT JANUARY
        if (MM < 3) {
            MM += 12;
            year -= 1;
        }
    const CC = parseFloat(String(year).slice(0, 2));
    const YY = parseFloat(String(year).slice(2, 4));

    //FORMULA TO GET THE INDEX OF THE DAYS (ADDED MATH FLOOR FOR ACCURACY)
    let d = (
        Math.floor(CC / 4) - (2 * CC) - 1 +
        Math.floor(5 * YY / 4) +
        Math.floor(26 * (MM + 1) / 10) + DD
        )% 7;

    if (d < 0) { d += 7; d = d} 

    // AKAN NAMES AND MEANINGS IN ARRAYS
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const akanMeanings = [
        "This is because you were born on a Sunday!",
        "This is because you were born on a Monday!",
        "This is because you were born on a Tuesday!",
        "This is because you were born on a Wednesday!",
        "This is because you were born on a Thursday!",
        "This is because you were born on a Friday!",
        "This is because you were born on a Saturday!"
    ];

    // CONDITIONS TO DETERMINE AKAN NAME
        if (gender === "male") {
            akanName = maleNames[d];
            akanMeaning = akanMeanings[d];
        } else if (gender === "female") {
            akanName = femaleNames[d];
            akanMeaning = akanMeanings[d];
        }

    // DISPLAYING THE AKAN NAME AND MEANING
    document.querySelector("#akanNameDisplay").innerText = akanName;
    document.querySelector("#akanMeaningDisplay").innerText = akanMeaning;

});
