function atlag(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return "Helytelen bemenet";
    }

    const osszeg = array.reduce((szam1, szam2) => szam1 + szam2, 0);
    const atlag = osszeg / array.length;

    return Math.floor(atlag);
}

const bemenet = [28, 12, 43, 2 ,7 ,92, 4];
const eredmeny = atlag(bemenet);

console.log("Átlag, kerekítve:", eredmeny);
