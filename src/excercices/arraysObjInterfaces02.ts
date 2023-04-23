/*
    ===== Código de TypeScript =====
*/

console.log("Hello");

// You can do something like this... to make the array accept all data types
// let skills: (boolean | string | number)[] = ["Bash", "Counter", "Healing"];

let skills: string[] = ["Bash", "Counter", "Healing"];

interface Character {
    name: string,
    hp: number,
    skills: string[]
    hometown?: string,
}

const character: Character = {
    name: "Vladi",
    hp: 100,
    skills: ["Bash", "Counter", "Healing"],
}

character.hometown = "Bolivia";

