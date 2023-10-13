let tomb = ["HTML", "CSS", "JS"];


//1. feladt
function tomb1(index){
    var elso = document.getElementById("text1");
    elso.textContent = tomb[index];
}



//2. feladat
function osszegElem(){
    var osszes = document.getElementById("text1");
    osszes.textContent = tomb;
}

//3. feladat
function ad(){
    var hozza = document.getElementById("hozza").value;
    tomb.push(hozza);
}

//4. fealat
function tombHossza(){
    var hossza = document.getElementById("text1");
    let hossz = tomb.length;
    hossza.textContent = hossz;
}

//5. feladat
function torol(){
    var index = document.getElementById("torles").value;
    tomb.splice(index, 1, "");
}