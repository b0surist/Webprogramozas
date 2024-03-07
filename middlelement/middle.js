function gimme(inputArray) {
    let middleNumber = inputArray.slice().sort((a, b) => a - b)[1];
    return inputArray.indexOf(middleNumber);
}