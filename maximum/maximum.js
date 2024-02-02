function maximum(array){
    let maxszam = array[0] * array[1];
    for(let i = 0; i < array.length - 1; i++){
        let szam = array[i] * array[i + 1]
        maxszam = Math.max(maxszam, szam);
    }
    return maxszam
}