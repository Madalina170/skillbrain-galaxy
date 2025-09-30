
function reverseArray(myArray) {
    return [...myArray].reverse();
}

const myArray1 = [10, -30, 33, 56, 100, -68, -6];
const myArray2 = [1, -3, 3, 56, 10, -8, -90];

console.log("The reversed array of " + myArray1 + " is: " + reverseArray(myArray1));
console.log("The reversed array of " + myArray2 + " is: " + reverseArray(myArray2));