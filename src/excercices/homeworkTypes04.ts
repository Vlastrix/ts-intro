/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    name: string;
    age: number;
    // You can do it both ways...
    direction: Direction;
    // direction: {
    //     street: string;
    //     country: string;
    //     city: string;
    // };
    // You can do it both ways...
    // showDirection(): string;
    showDirection: () => string;
}

interface Direction {
    street: string;
    country: string;
    city: string;
}

const superHero: SuperHero = {
    name: "Spider-man",
    age: 30,
    direction: {
        street: "Main St",
        country: "USA",
        city: "NY",
    },
    showDirection() {
        return `${this.name}, ${this.direction.country}, ${this.direction.city}`
    }
}

const direction = superHero.showDirection();
console.log(direction);