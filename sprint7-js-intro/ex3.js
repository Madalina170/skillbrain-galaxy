function zileleSaptamanii (nr) {
    let ziua
    switch (nr) {
        case 0:
            ziua: "Duminica";
            break
        case 1:
            ziua: "Luni";
            break 
        case 2:
            ziua: "Marti";
            break
        case 3:
            ziua: "Miercuri";
            break
        case 4:
            ziua: "Joi";
            break
        case 5:
            ziua: "Vineri";
            break
        case 6:
            ziua: "Sambata";
            break
        }
}

console.log(zileleSaptamanii(3))