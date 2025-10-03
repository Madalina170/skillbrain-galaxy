

function getRecipe(titlu, portii, ingrediente) {
        const recipe = {
            titlu,
            portii,
            ingrediente,
    }
    return recipe;
}

const reteta1 = getRecipe(
    "Mamaliga in paturi", 4, ["Faina de porumb", "apa", "slanina", "branza"]);

const reteta2 = getRecipe(
    "Lapte de pasare", 4, ["1 litru de lapte", "5 oua", "zahar", "sare"]);

console.log(reteta1);
console.log(reteta2);