function paratlanOsszeg(tomb) {
    if (!Array.isArray(tomb)) {
        return undefined;
    }
    let osszeg = 0;
    for (let i = 0; i < tomb.length; i++) {
        
        if (typeof tomb[i] === 'number' && tomb[i] % 2 !== 0) {
            osszeg += Math.pow(tomb[i], 3);
        } else {
            return undefined;
        }
    }
    return osszeg;
}
const szamok = [11, 23, 44, 56, 4];
console.log(paratlanOsszeg(szamok)); 