function pairs(array) {
    let count = 0;

    for (let i = 0; i < array.length - 1; i++) {
        if (Math.abs(array[i] - array[i + 1]) === 1) {
            count++;
            i++;
        }
    }

    return count;
}