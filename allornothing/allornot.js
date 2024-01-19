function joe = (key, asnwer) => {
    let jok = 0;
    let rossz = 0;
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
    return jok === rossz || jok === 0;
}
    
