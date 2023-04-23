/*
    ===== Código de TypeScript =====
*/

interface Player {
    volume: number,
    second: number,
    song: string,
    details: Details,
}

interface Details {
    author: string,
    year: number,
}

const player: Player = {
    volume: 100,
    second: 0,
    song: "Radio Play",
    details: {
        author: "Silva Hound",
        year: 2023,
    }
}

// no importa el orden
const {volume: vol, second, song, details} = player;
const {author, year} = details;

console.log("El volumen actual es: ", vol);
console.log("El segundo actual es: ", second);
console.log("La cancion actual es: ", song);
console.log("El autor es: ", author);
console.log("El año es: ", year);

const dbz: string[] = ["Goku", "Vegeta", "Trunks"]

const [goku, vegeta, trunks] = dbz;

/*
 importa el orden
 const [goku, vegeta, trunks] = dbz;
 se usa esto para obviar la posicion y saltar a la posicion 3
 const [, , trunks] = dbz;
*/

console.log("Personaje 1:", goku);
console.log("Personaje 2:", vegeta);
console.log("Personaje 3:", trunks);