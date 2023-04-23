/*
    ===== Código de TypeScript =====
*/

import {calculateTaxOverSales, Product} from "./functionDestructure06";

let shoppingCart: Product[] = [
    {
        desc: "Kurama K552",
        price: 49,
    },
    {
        desc: "Mouse-pad",
        price: 50,
    }
]

const [total, taxOverSales] = calculateTaxOverSales(shoppingCart);

console.log("El total es:", total);
console.log("El impuesto es:", taxOverSales);