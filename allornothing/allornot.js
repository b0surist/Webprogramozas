let jok = 0;
let rossz = 0;

function joe(key, asnwer)
    for(let i = 0; i < key.lenght; i++){
    const jovalasz = key[i]
    const diakvalasz = asnwer[i]
    if(jovalasz != "_"){
        rossz++;
        if(jok === diakvalasz){
            jok++;
        }
        }
}
    