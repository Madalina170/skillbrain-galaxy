const myArray = [10, -30, 33, 56, 100, -68, -6]; 
/*const myArray2 = [1, 2, 3, 4, 5]; */
let sum = 0;

for (x = 0; x < myArray.length; x++) {
    sum = sum + myArray[x];
}

console.log("The sum of my array is: " + sum)