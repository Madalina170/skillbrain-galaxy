
function getRandom(start, end) {
    let newNumber = Math.floor(Math.random() * (end - start) + start);
    return newNumber;
}

let a = 10;
let b = 50;

console.log(getRandom(a, b));