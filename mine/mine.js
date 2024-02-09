function mine(n){
    for(let i = 0;i<n.length;i++){
        for(let j = 0;j<n[i].length;j++){
            if(n[i][j] == 1){
                return [i, j];
            }
        }
    }
}