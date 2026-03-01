
function ageCalc(yearOfBirth) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    age = currentYear - yearOfBirth;
    return age;
}

let name = "Ana";
let yearOfBirth = 1995;
let printOnScreen = name + "'s age is " + ageCalc(yearOfBirth);

console.log(printOnScreen);
