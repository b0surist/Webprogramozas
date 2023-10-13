let adatok = [];
let ures = "";

function getInputValue(){
    var t = document.getElementById("text").value;
    for(let i = 0; i < adatok.length; i++){
        document.getElementById("elements").innerHTML = `<div>${adatok[i]}</div`
    }
}

