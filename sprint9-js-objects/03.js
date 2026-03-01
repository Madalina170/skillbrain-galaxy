// 2. Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate

// Funcția primește 2 parametri ca date de intrare. Unul dintre parametri este obiectul, iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.

// Exemplu 1:

// Input: obiect = { a: 1, b: 2 }, proprietate = “b”

// Output: { a: 1 }

function getDetails(person){
    let newPerson = {
        firstName: person.firstName,
        lastName: person.lastName,
        age: person.age,
        eyeColor: person.eyeColor,
    };
    delete newPerson.age;
    return newPerson;
}

let person1 = {
    firstName: "Ana",
    lastName: "Somesan",
    age: 23,
    eyeColor: "blue",
};

console.log(getDetails(person1));