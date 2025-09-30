
function countVowels(text) {
    let vowels = ["a", "e", "i", "o", "u"];
    let sum = 0;
    
    for (i = 0; i < text.length; i++) {
        for (k = 0; k < vowels.length; k++) {
            if (text[i].toLowerCase() === vowels[k]) {
                sum += 1;
            }
        }
    }
    return sum;
}

let text1 = "My progrAm that has vOwels";
console.log("Numarul de vocale din: " + text1 + " este: " + countVowels(text1));

let text2 = "Mi-am uitat un pApuc de casa pE un piciOr"
console.log("Numarul de vocale din: " + text2 + " este: " + countVowels(text2));
