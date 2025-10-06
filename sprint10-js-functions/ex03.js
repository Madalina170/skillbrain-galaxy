
function countLetters(text) {
    const matches = text.match(/a/gi); // g - global (all matches); i - case insensitive
    return matches ? matches.length : 0; 
}

let text1 = "Ana are mere";
let result = countLetters(text1);
console.log("Stringul 'Ana are mere' are: " + result + " A-uri");

let text2 = "Test de tEst";
let result2 = countLetters(text2);
console.log("Stringul 'Test de tEst' are: " + result + " E-uri");