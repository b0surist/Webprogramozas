function megforditas(array) {
    if (!Array.isArray(array)) {
        return "A bemenet nem egy tömb!";
    }

    const hossz = array.length;
    if (hossz <= 1) {
        return array; 
    }
    const kozep = Math.floor(hossz / 2);
    const elso = array.slice(0, kozep);
    const masodik = array.slice(kozep);
    const megforditott = masodik.concat(elso);
    return megforditott;
}

const bemenet = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const megforditott = megforditas(bemenet);

console.log("Eredeti:", bemenet);
console.log("Megfordított:", megforditott);
