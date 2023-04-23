/*
    ===== Código de TypeScript =====
*/
// This is not possible thanks to TypeScript
// function add(a: number , b: number): number {
//     return (a + b).toString();
// }

function add(a: number, b: number): number {
    return a + b;
}

// These two functions are the same

const addArrow = (a, b): number => {
    return a + b;
}

const addArrowDou = (a, b): number => a + b;

function multiply(a: number, b?: number, c: number = 2): number {
    return a * b;
}
// This is not possible thanks to TypeScript
// add("Vladislav", "Bochkov");
const result: number = add(1,2);
const result1: number = addArrow(1,2);
const result2: number = addArrowDou(1,2);
const result3: number = multiply(1);


interface CharacterLOR {
    name: string,
    hp: number,
}

function heal(characterToHeal: CharacterLOR, amountToHeal: number): void {
    characterToHeal.hp += amountToHeal
}

const newCharacter: CharacterLOR = {
    name: "Vladi",
    hp: 100,
}

heal(newCharacter, 10);

console.log(character);