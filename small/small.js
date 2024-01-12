function legkisebb(arr, visszateres) {
    if (visszateres === 'value') {
        return Math.min(...arr);
    } else if (visszateres === 'index') {
        const minErtek = Math.min(...arr);
        return arr.indexOf(minErtek);
    } 
}


const szamok = [3, 2, 0, 5, 6, 7];
console.log(legkisebb(szamok, 'value')); 
console.log(legkisebb(szamok, 'index')); 