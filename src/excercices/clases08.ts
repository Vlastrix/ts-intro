/*
    ===== Código de TypeScript =====
*/

// class Hero {
//     private alterEgo: string;
//     public age: number;
//     static realName: string;
// }

// Slow way to do this...
// class Hero {
//     alterEgo: string;
//     age: number;
//     realName: string;
//     printName(): void {
//         console.log(this.realName);
//     }
//     constructor(alterEgo: string, age: number, realName: string) {
//         this.alterEgo = alterEgo;
//         this.age = age;
//         this.realName = realName;
//     }
// }
// this one is faster and better

class NormalPerson {
    constructor(
        public name: string,
        public address: string
    ) {}
}

class Hero extends NormalPerson {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        super(realName, "NY");
    }
}

const donVladi = new Hero("Don Vladi", 18, "Vladi");


