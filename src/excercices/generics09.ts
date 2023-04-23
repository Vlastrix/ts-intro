/*
    ===== Código de TypeScript =====
*/

function whatTypeIam<T>(argument: T) {
    return argument;
}

const IamAString = whatTypeIam("Hello");
const IamNumber = whatTypeIam(12);
const IamArray = whatTypeIam(["Hello", "asdf", "haro"]);

const IamExplicit = whatTypeIam<string[]>(["Hello", "asdf", "haro"]);


