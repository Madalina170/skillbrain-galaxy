
function getEvenNumbers(nMax) {
    const list = [];

    for (n = 0; n < nMax; n++) {
        if (n % 2 === 0){
            list.push(n);
        }
    }

    return list;
}

console.log(getEvenNumbers(20));
console.log(getEvenNumbers(100));
console.log(getEvenNumbers(23));