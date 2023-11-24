function kiiras(){
    let fizetes = {
        Anna : 2100,
        Cecil : 1890,
        Emil : 2050,
        Gerald : 2920
    };
    
    let ossz = 0;
    let kiir = "";
    
    for(i in fizetes) {
        ossz += fizetes[i];
        kiir += i + ":" + fizetes[i] + "Ft, ";
    }
    
    kiir += "A fizetésük összesen: " + ossz;
    console.log(kiir);
    document.getElementById("kii").innerHTML = kiir;
    }