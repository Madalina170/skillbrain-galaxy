// Write a loop that counts backwards from 10 down to 1.

function count(nMax) {
    let result = [];
    for (let x = nMax; x >= 1; x--) {
        result.push(x);
    }
    return result;
}

console.log(count(50));


