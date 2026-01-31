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
    if (d < 0) { d += 7; } 

    // AKAN NAMES IN ARRAYS
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const akanMeanings = [
        "Born on a Sunday, you are a Manchester United fan.(YUCK)",
        "Born on a Monday, you are a Chelsea fan.",
        "Born on a Tuesday, you are a Real Madrid fan.",
        "Born on a Wednesday, you are a Manchester City fan.",
        "Born on a Thursday, you are a Spurs fan.",
        "Born on a Friday, you are an Arsenal fan.",
        "Born on a Saturday, you are a Barcelona FC fan."
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
