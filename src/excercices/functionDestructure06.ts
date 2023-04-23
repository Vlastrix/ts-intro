/*
    ===== Código de TypeScript =====
*/

export interface Product {
    desc: string,
    price: number
}

const smartphone: Product = {
    desc: "OnePlus 8 Pro",
    price: 1000,
}

const tablet: Product = {
    desc: "iPad pro",
    price: 1400,
}


export function calculateTaxOverSales(products: Product[]): [number, number] {
    let total = 0;
    // products.forEach(function (product: Product) {
    //     total += product.price
    // });
    products.forEach(function ({price}) {
        total += price
    });
    return [total, total * 0.15];
}

// const taxOverSales = calculateTaxOverSales([smartphone, tablet]);
const [total, taxOverSales] = calculateTaxOverSales([smartphone, tablet]);

console.log("El total es:", total);
console.log("El impuesto es:", taxOverSales);