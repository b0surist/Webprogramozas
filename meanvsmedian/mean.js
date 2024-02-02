let tomb = [1, 3, 3, 4, 5, 6, 7]
let median = 0;
function medianf(tomb, median){
    tomb.sort();
    for(let i = 0; i in tomb; i++){
        
        if(median % 2 === 0){
            median = (tomb.length / 2 - 1) + tomb[tomb.length / 2] / 2;
        }
        else{
            median = tomb[(tomb.length - 1) / 2];
        }
    }
    return median;
}

let mean = 0;
function meanf(tomb, mean){
    
    for(let i = 0;i in tomb.length; i++){
        mean += tomb[i];
        
    }
    
    return mean / tomb.length;
}

function hasonlit(mean, median){
    let meann = "mean";
    let mediann = "median";
    let same = "same";
    if(mean > median){
        return meann;
    }
    if(median > mean){
        return mediann;
    }
    else{
        return same;
    }
}


