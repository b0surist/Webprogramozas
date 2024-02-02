function insertDash(num) {
    var numStr = num.toString();
    var result = "";
    for (let i = 0; i < numStr.length; i++) {
        if (parseInt(numStr[i]) % 2 !== 0 && parseInt(numStr[i + 1]) % 2 !== 0) {
            result += numStr[i] + "-";
        } else {  
            result += numStr[i];
        }
    }
    return result;
}
var result = insertDash(454793);
console.log(result);
