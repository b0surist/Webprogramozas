//all or nothing
function possiblyPerfect(key,answers) {
    for(let i = 0;i<key.length;i++){
        if(answers[i] !== "_"){
            if(key[i] === answers[i]){
                return false
            }
        }
        else{
            if(key[i] === answers[i]){
                return true
            }
            
        }
    }
    return true
    
}

console.log(possiblyPerfect([..."A_C_B"],[..."ADCEB"]) + " >> true ");
console.log( possiblyPerfect([..."B_B"],[..."BDC"]) + " >> false ");
console.log( possiblyPerfect([..."T_FFF"],[..."FFTTT"]) + " >> true ");
console.log( possiblyPerfect([..."BA__"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABA_"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABC_"],[..."BACC"]) + " >> false ");
console.log( possiblyPerfect([..."B_"],[..."CA"]) + " >> true ");
console.log( possiblyPerfect([..."BA"],[..."CA"]) + " >> false ");
console.log( possiblyPerfect([..."B"],[..."B"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TFFF"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TTFT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."TTFT"]) + " >> false ");
console.log( possiblyPerfect([..."_TTT"],[..."TTTT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."FFFF"]) + " >> true ");
console.log( possiblyPerfect([..."____"],[..."FFFF"]) + " >> true ");


//meanvsmedian
function meanVsMedian(numbers) {
    let mean = "";
    let median = "";
    numbers.sort();
    for(let i = 0;i < numbers.length; i++){
        mean += numbers[i];
        return mean / numbers.length;
    }
    
    for(let i = 0;i < numbers.length;i++){
        if(median % 2 === 0){
            median = (numbers.length / 2 - 1) + numbers[numbers.length / 2] / 2;
        }
        else{
            median = numbers[(numbers.length - 1) / 2];
        }
        return median;
    }
   
    if(mean > median){
        return "mean";
    }
    if(median > mean){
        return "median";
    }
    else{
        return "same";
    }
}
console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');


    

// Swap the head and the tail
function swapHeadAndTail(arr) {
    const kozep = Math.floor(arr.length/2);
    const elso = arr.slice(0, kozep);
    const masodik = arr.slice(kozep);
    const megf = masodik.concat(elso)
    return megf
}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);