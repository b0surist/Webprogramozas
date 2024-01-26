function osszeadas(a, b) {
    return a + b;
}

function kivonas(a, b) {
    return a - b;
}

function szorzas(a, b) {
    return a * b;
}

function osztas(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Nullával nem lehet osztani";
    }
}

function szamol(muvelet, szam1, szam2) {
    switch (muvelet) {
        case "osszeadas":
            return osszeadas(szam1, szam2);
        case "kivonas":
            return kivonas(szam1, szam2);
        case "szorzas":
            return szorzas(szam1, szam2);
        case "osztas":
            return osztas(szam1, szam2);
        default:
            return "Ilyen nem található";
    }
}

var muvelet = "szorzas";
var szam1 = 5;
var szam2 = 3;

var eredmeny = szamol(muvelet, szam1, szam2);
console.log("Az eredmény: " + eredmeny);