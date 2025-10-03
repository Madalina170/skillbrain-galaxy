function onlyOdd(nMax) {
    let oddNum = [];
    for (let i = 0; i < nMax; i++) {
        if (i % 2 === 0) {
            continue;
        }
        return oddNum;
    }
}

console.log(onlyOdd(20));