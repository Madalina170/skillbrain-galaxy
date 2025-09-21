let text = "My program that has vowels";
let vowels = ["a", "e", "i", "o", "u"];

let sum = 0;

for (i = 0; i < text.length; i++) {
    for (k = 0; k < vowels.length; k++) {
        if (text[i] === vowels[k]) {
            sum += 1;
        }
    }
}

console.log("The amount of vowels in my program that has vowels is: ", sum);