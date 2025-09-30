
function sumMyArray(myArray) {
    let sum = 0;

    for (x = 0; x < myArray.length; x++) {
        sum += myArray[x];
    }
    return sum
}

const myArray1 = [10, -30, 33, 56, 100, -68, -6];
console.log("The sum of my array: " + myArray1 + " is: " + sumMyArray(myArray1));

const newList = [1, 2, 3, 5];
console.log("The sum of my new array: " + newList + " is: " + sumMyArray(newList));



