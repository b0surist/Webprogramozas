function insertDash(num){
    num = "454793" * 1;

    for(let i = 0; i < num.length; i++){
        if(num[i] % 2 == 1 && num[i + 1] % 2 == 1){
            num[i] += "-";
        }
        else{
            num[i] += "";
        }
    }
    return num;
}